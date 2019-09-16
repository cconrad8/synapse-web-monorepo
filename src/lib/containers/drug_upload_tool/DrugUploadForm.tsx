import './DrugUploadTool.scss';

import * as React from 'react';
import _ from 'lodash';
import { Engine } from 'json-rules-engine';
import {
  default as Form,
  UiSchema,
  AjvError,
  ErrorListProps
} from 'react-jsonschema-form';

import { Step, StepStateEnum, NavActionEnum, SummaryFormat } from './types';
import Header from './Header';
import StepsSideNav from './StepsSideNav';
import { NavButtons, NextStepLink } from './NavButtons';

import DataDebug from './DataDebug';
import SummaryTable from './SummaryTable';
import WarningModal from './WarningModal';

export type DrugUploadFormProps = {
  schema: any;
  uiSchema: any;
  navSchema: {
    steps: any[];
  };
  formData: {};
  onSubmit: Function;
  onSave: Function;
  formTitle: string;
  isWizardMode?: boolean;
};

type DrugUploadFormState = {
  isLoading?: boolean;
  formData: any; // form data that prepopulates the form
  formSchema: any; // schema that drives the form
  currentStep: Step;
  nextStep?: Step;
  steps: Step[];
  previousStepIds: string[];
  hasValidated?: boolean;
  doShowErrors: boolean;
  modalContext?: { action: Function; arguments: any[] };
};

type RulesEvent = {
  type: string;
  params: {
    next: string;
  };
};

type RulesResult = {
  events: RulesEvent[];
};

export interface SummaryFormat {
  label: string;
  value: string;
}

export default class DrugUploadForm extends React.Component<
  DrugUploadFormProps,
  DrugUploadFormState
> {
  excludeWarningText = `This action will clear the entire contents of this page. Only this page will be effected.
  Are you sure you want to clear the data enterred on this page?`;
  excludeWarningHeader = `Clear Entered Data`;
  formRef: any; //ref to form for submission
  navAction: NavActionEnum = NavActionEnum.NONE;
  uiSchema: {};
  nextStep: Step | undefined;

  constructor(props: DrugUploadFormProps) {
    super(props);

    //will modify the ui:help to render html vs text
    this.uiSchema = stringToElementForProp(
      _.cloneDeep(props.uiSchema),
      'ui:help'
    );
    //create steps array from the navSchema
    const steps = props.navSchema.steps
      .map((step, i) => {
        return {
          ...step,
          inProgress: i === 0 ? true : false
        };
      })
      .sort((a, b) => a.order - b.order);

    this.formRef = React.createRef();
    this.state = {
      isLoading: true,
      currentStep: steps[0],
      steps: steps,
      previousStepIds: [],
      formData: props.formData || {},
      formSchema: props.schema,

      doShowErrors: false
    };
  }

  componentDidMount() {
    this.setInitialData(this.props.navSchema, this.props.formData);
  }

  setInitialData = (navSchema: any, formData: any = {}) => {
    const schema = this.getSchema(this.state.currentStep.id);
    this.setState({
      formSchema: { ...{}, ...schema },
      isLoading: false
    });
  };

  // get the schema slice for the current screen/step
  getSchema = (stepId: string): object => {
    //only get schema for current step. Only the portion of entire form is shown
    const schemaForStep = 'properties.' + stepId;
    const currentStepSlice = _.pick(this.props.schema, [
      'definitions',
      'title',
      'type',
      schemaForStep
    ]);
    return currentStepSlice;
  };

  // find the next step
  getNextStepId = async (
    currentStep: Step,
    formData: any,
    nextStepId?: string
  ): Promise<string> => {
    if (nextStepId) {
      return Promise.resolve(nextStepId);
    }
    if (!currentStep.rules || currentStep.rules.length === 0) {
      return Promise.resolve(currentStep.default);
    }

    // if there are rules - run the engine and go to the first next step
    let engine = new Engine(currentStep.rules);

    try {
      const result: RulesResult = await engine.run(formData);
      if (result.events.length > 0) {
        return result.events[0].params.next;
      } else {
        return currentStep.default;
      }
    } catch (error) {
      return currentStep.default;
    }
  };

  // called when going next, previous or a given step
  moveStep = async (
    formData: any,
    nextStepId: string | undefined,
    isError: boolean,
    previousStack = [...this.state.previousStepIds]
  ) => {
    let schema;

    const currentStep = this.state.currentStep;
    let currentStepState: StepStateEnum;
    //we don't wnat to display errors on the page - this will be done explicitly in validation
    this.formRef.current.setState({ errorSchema: {} });

    //previousStack is used for 'back' navigation is wizard mode
    previousStack.push(currentStep.id);

    if (!isError) {
      currentStepState = StepStateEnum.COMPLETED;
    } else {
      currentStepState = StepStateEnum.ERROR;
    }
    // determine next step
    nextStepId = await this.getNextStepId(currentStep, formData, nextStepId);

    const steps = this.state.steps.map(step => {
      if (step.id === currentStep.id) {
        return { ...step, ...{ state: currentStepState, inProgress: false } };
      } else if (step.id === nextStepId) {
        return { ...step, ...{ inProgress: true } };
      }
      return { ...step, ...{ inProgress: false } };
    });

    //at this point the form is valid and submitted and the data reflects the latest
    const nextStep = this.state.steps.find(step => step.id === nextStepId)!;

    // if it's a final screen we want

    // - to get the schema for the entire form so that we can validate against it.
    const isNextStepSubmit = nextStep.final;

    if (isNextStepSubmit) {
      schema = this.props.schema;
      this.navAction = NavActionEnum.NONE;
      this.formRef.current.submit();
    } else {
      schema = this.getSchema(nextStepId);
    }

    this.saveStepState(formData, previousStack, steps, nextStep!, schema);
  };

  //save the state of the current screen
  saveStepState = (
    formData: any,
    previousStack: string[],
    steps: Step[],
    newCurrentStep: Step,
    schema: any
  ) => {
    this.setState({
      formSchema: { ...{}, ...schema },
      formData: {
        ...this.state.formData,
        ...formData
      },
      previousStepIds: [...previousStack],
      steps: [...steps],
      currentStep: newCurrentStep,
      hasValidated: false,
      doShowErrors: false
    });
  };

  //--------- fns to support navigation --------------------//
  goPrevious = async (formData: any, isError: boolean) => {
    let previousStepId: string | undefined;
    const previousStack: string[] = [...this.state.previousStepIds];
    // in wizard mode we go to the previously visited screen. In regular mode go to the screen with previous index
    if (this.props.isWizardMode) {
      previousStepId = previousStack.pop();
    } else {
      const currentIndex = _.findIndex(this.state.steps, {
        id: this.state.currentStep.id
      });
      if (currentIndex > 0) {
        previousStepId = this.state.steps[currentIndex - 1].id;
      }
    }
    if (!_.isUndefined(previousStepId)) {
      return this.moveStep(formData, previousStepId, isError, previousStack);
    }
  };

  triggerNavAction = (navAction: NavActionEnum) => {
    // we don't need to validate on save so bypassing submit
    if (navAction === NavActionEnum.SAVE) {
      //const data = this.doSave(this.state.formData);
      return this.props.onSave(this.state.formData);
    } else {
      this.navAction = navAction;
      this.formRef.current.submit();
    }
  };

  // triggered when we click on the step name in left nav (doesn't happen in wizard mode)
  triggerStepChange = (step: Step) => {
    this.nextStep = step;
    this.triggerNavAction(NavActionEnum.NAV)
  };

  onError = (args: any) => {
    this.setState({
      doShowErrors: true
    });
    if (this.navAction === NavActionEnum.VALIDATE) {
      const modifiedSteps = this.setStepStatusForFailedValidation(
        args.props,
        this.state.steps,
        this.state.formSchema.properties
      );
      this.setState({ steps: modifiedSteps });
    }
  };

  setStepStatusForFailedValidation = (
    errors: AjvError[],
    steps: Step[],
    currentSchemaProperties: any
  ): Step[] => {
    //error property is in the format: step.somevalue.etc  .welcome.submission_name example
    //find all the steps where there is an error
    const stepsWithError = errors.map(
      error => _.trimStart(error.property, '.').split('.')[0]
    );
    //find all steps in current schema
    const stepsInCurrentSchema = Object.keys(currentSchemaProperties);
    const updatedSteps: Step[] = steps.map(step => {
      if (stepsWithError.indexOf(step.id) > -1) {
        return {
          ...step,
          state: StepStateEnum.ERROR
        };
      } else if (stepsInCurrentSchema.indexOf(step.id) > -1) {
        return {
          ...step,
          state: StepStateEnum.COMPLETED
        };
      } else {
        return step;
      }
    });
    return updatedSteps;
  };

  //we are constantly saving form data. Needed to overwrite on-error behavior
  handleOnChange({ formData }: any) {
    this.setState({ formData });
  }

  /*doSave = (formData: any): object => {
    const updatedFormData = {
      ...this.state.formData,
      ...formData
    };
    this.setState({
      formData: { ...{}, ...updatedFormData }
    });
    return updatedFormData;
  };*/

  performAction(navAction: NavActionEnum, hasError: boolean) {
    const formData = this.state.formData;

    switch (navAction) {
      case NavActionEnum.NEXT: {
        return this.moveStep(formData, undefined, hasError);
      }
      case NavActionEnum.PREVIOUS: {
        return this.goPrevious(formData, hasError);
      }
      case NavActionEnum.NAV: {
        //nextStep is returned when clicked on the Steps left nav
        if (!this.nextStep) {
          return;
        }
        return this.moveStep(formData, this.nextStep.id, hasError);
      }

      case NavActionEnum.SUBMIT: {
        //const data = this.doSave(formData);
        alert('Do some kind of submission thing');
        this.props.onSubmit(formData);
      }
      case NavActionEnum.VALIDATE: {
        //we get here is we clicked validate and the data is valid.
        // if it's not valid we handle it in onError fn
        const currentStep = {
          ...this.state.currentStep,
          state: StepStateEnum.COMPLETED
        };
        const steps = this.state.steps.map(step => {
          return {
            ...step,
            state:
              step.id === currentStep.id ? StepStateEnum.COMPLETED : step.state
          };
        });

        this.setState({ hasValidated: true, currentStep, steps });
      }
      default:
        return;
    }
  }

  //we need to route things through submit - otherwise validation does not kick in
  // it triggers internal library validation and calls the performAction with the params for action
  onSubmit = (): any => {
    this.performAction(
      this.navAction,
      this.state.currentStep.state === StepStateEnum.ERROR
    );
  };

  isSubmitScreen = (): boolean => {
    return this.state.currentStep.final === true;
  };

  showExcludeStateWarningModal = (
    stepId: string,
    isUpdateFlattenedData: boolean = false
  ): void => {
    this.setState({
      modalContext: {
        action: this.toggleExcludeStep,
        arguments: [stepId, true, isUpdateFlattenedData]
      }
    });
  };

  toggleExcludeStep = (
    stepId: string,
    isExclude: boolean,
    isUpdateFlattenedData?: boolean
  ): void => {
    const steps = this.state.steps.map(stp => {
      if (stp.id === stepId) {
        return { ...stp, ...{ excluded: isExclude } };
      }
      return stp;
    });

    this.setState(
      (prevState: DrugUploadFormState, currProps: DrugUploadFormProps) => {
        const formData = _.cloneDeep(prevState.formData);

        const currentStep = prevState.currentStep;
        if (currentStep.id === stepId) {
          currentStep.excluded = isExclude;
        }
        //if exluding - blow away the data for the step
        if (isExclude) {
          formData[stepId] = {};
        } else {
          _.set(formData, `${stepId}.included`, true);
        }

        return {
          steps,
          formData,
          modalContext: undefined,
          currentStep
        };
      }
    );
  };

  // displays the text for screens that don't have any form data
  private renderTextForStaticScreen = (): JSX.Element => {
    if (!this.state.currentStep.copy) {
      return <></>;
    }
    const copy = this.state.currentStep.copy;
    return <div dangerouslySetInnerHTML={{ __html: copy! }} />;
  };

  //displays subheader for forms that can be excluded
  renderOptionalFormSubheader = (isWizard: boolean = false): JSX.Element => {
    if (isWizard) {
      return <></>;
    }
    const currentStep = this.state.currentStep;

    if (currentStep.excluded === true) {
      return (
        <div>
          This sub-form is currently not included in the submission.
          <a
            href="#"
            onClick={() => this.toggleExcludeStep(currentStep.id, false)}
          >
            INCLUDE
          </a>
        </div>
      );
    } else if (currentStep.excluded === false) {
      return (
        <div>
          This sub-form is currently included in the submission.{' '}
          <a
            href="#"
            onClick={() =>
              this.showExcludeStateWarningModal(this.state.currentStep.id)
            }
          >
            EXCLUDE
          </a>
        </div>
      );
    }
    return <></>;
  };

  transformErrors = (errors: AjvError[]): AjvError[] => {
    //if we are not in wizard mode and not rying to submit or validate we just want to skip
    // over the errors and just set the step status
    if (
      this.navAction !== NavActionEnum.SUBMIT &&
      this.navAction !== NavActionEnum.VALIDATE &&
      !this.props.isWizardMode
    ) {
      const currentStep = {
        ...this.state.currentStep
      };
      if (errors.length > 0) {
        currentStep.state = StepStateEnum.ERROR;
      } else {
        currentStep.state = StepStateEnum.COMPLETED;
      }

      this.setState({ currentStep });

      return [];
    }

    // there is an odd behavior in the lib that in cases when we have additional fields depending on enum
    // value if it's required and not entered we get 3 error: enum, required, and oneOf
    // so if there is an error Oneof on a parent - ignore it and enum on a child. and just output 'required'
    // if there is an enum error and there is required with the same prefix remove it

    const reqErrors = errors.filter(error => error.name === 'required');
    reqErrors.forEach(error => {
      const parentPath = error.property.substring(
        0,
        error.property.lastIndexOf('.')
      );
      _.remove(errors, (error: AjvError) => {
        return (
          error.property.indexOf(parentPath) > -1 &&
          (error.name === 'enum' || error.name === 'oneOf')
        );
      });
    });
    return errors;
  };



  renderErrorListTemplate = (props: ErrorListProps) => {
    let { errors } = props;
    const currentLis = errors.map((error, i) => {
      return renderTransformedErrorObject(
        this.state.steps,
        error,
        this.uiSchema,
        i,
        this.state.formSchema
      );
    });

    return (
      <div className="form-error-summary">
        <ul className="error-detail">{currentLis}</ul>
      </div>
    );
  };

  render() {
    return (
      <div className="outter-wrap">
        <Header
          bodyText={this.state.currentStep.description}
          title={this.props.formTitle}
        ></Header>
        {this.state.isLoading && (
          <div className="text-center">
            <span>loading&hellip;</span>
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          </div>
        )}

        <div
          style={{
            display: this.state.isLoading ? 'none' : 'block'
          }}
        >
          <div className="inner-wrap">
            {
              <StepsSideNav
                stepList={this.state.steps}
                isWizardMode={this.props.isWizardMode}
                onStepChange={this.triggerStepChange}
              ></StepsSideNav>
            }
            <div className="form-wrap">
              {this.renderOptionalFormSubheader(this.props.isWizardMode)}
              {!this.state.currentStep.static && (
                <button
                  type="button"
                  className="btn btn-action save pull-right"
                  onClick={() => this.triggerNavAction(NavActionEnum.VALIDATE)}
                >
                  VALIDATE
                </button>
              )}

              {this.isSubmitScreen() && (
                <button
                  type="button"
                  className="btn btn-action save pull-right"
                  onClick={() => this.triggerNavAction(NavActionEnum.SUBMIT)}
                >
                  SUBMIT
                </button>
              )}

              <div
                className={this.isSubmitScreen() ? 'hide-form-only' : 'wrap'}
              >
                {this.state.hasValidated && <span>ALL GOOD!</span>}
                <div className="scroll-area">
                  <Form
                    className="submissionInputForm"
                    liveValidate={false}
                    formData={this.state.formData}
                    schema={this.state.formSchema}
                    uiSchema={this.uiSchema}
                    onSubmit={this.onSubmit}
                    onChange={args => this.handleOnChange(args)}
                    onError={args =>
                      this.onError({ props: args, form: this.formRef })
                    }
                    showErrorList={
                      !!this.state.doShowErrors || !!this.props.isWizardMode
                    }
                    ErrorList={this.renderErrorListTemplate}
                    transformErrors={this.transformErrors}
                    ref={this.formRef}
                  >
                    <div style={{ display: 'none' }}>
                      <button type="submit"></button>
                    </div>
                  </Form>
                  {this.renderTextForStaticScreen()}
                  {!this.props.isWizardMode && (
                    <NextStepLink
                      steps={this.state.steps}
                      nextStepId={this.state.currentStep.default}
                      onNavAction={(step: Step) => this.triggerStepChange(step)}
                    ></NextStepLink>
                  )}
                </div>
              </div>

              <div className={!this.isSubmitScreen() ? 'hidden' : ''}>
                <SummaryTable
                  formData={this.state.formData}
                  isWizard={this.props.isWizardMode}
                  steps={this.state.steps}
                  callbackFn={(screenId: string) =>
                    this.showExcludeStateWarningModal(screenId, true)
                  }
                ></SummaryTable>
              </div>

              <NavButtons
                currentStep={this.state.currentStep}
                steps={this.state.steps}
                previousStepIds={this.state.previousStepIds}
                onNavAction={(e: NavActionEnum) => this.triggerNavAction(e)}
              ></NavButtons>
            </div>
          </div>
        </div>

        {this.state.modalContext && (
          <WarningModal
            show={true}
            title={this.excludeWarningHeader}
            copy={this.excludeWarningText}
            callbackArgs={this.state.modalContext.arguments}
            onCancel={() => this.setState({ modalContext: undefined })}
            onOK={(stepId: string, isExclude: boolean, isUpdateFlat: boolean) =>
              this.toggleExcludeStep(stepId, isExclude, isUpdateFlat)
            }
          ></WarningModal>
        )}

        <DataDebug
          formSchema={this.state.formSchema}
          formData={this.state.formData}
          hidden={false}
        ></DataDebug>
      </div>
    );
  }
}

// takes in a single validation error and  and displays it in more readable manner
// used by renderErrorListTemplate
function renderTransformedErrorObject(
  steps: Step[],
  error: AjvError,
  uiSchema: UiSchema,

  i: number,
  schema: any
): JSX.Element {
  const propPath = _.trimStart(error.property, '.');
  const propArr = propPath.split('.');

  // some things require labels in schema (e.g. checkboxes) so this is preferred
  const labelFromSchema = `${propArr.join('.properties.')}.title`;
  //can be overriden by label in UI
  const regLabelFromUi = `${propPath}.ui:title`;
  //for array fields we need to change the property e.g.
  //  ld50.experiments[0].species_other should look like 'ld50.experiments.items.species_other'
  const arrayLabelFromUi = regLabelFromUi.replace(/\[.*?\]/, '.items');

  let label =
    _.get(schema.definitions, labelFromSchema) ||
    _.get(uiSchema, regLabelFromUi) ||
    _.get(uiSchema, arrayLabelFromUi) ||
    error.property;

  const screen = _.find(steps, { id: propArr[0] }) || { title: propArr[0] };
  const element = (
    <li key={i} className="">
      <span>
        <strong>{screen.title}: </strong>
        {label}&nbsp; {error.message}
      </span>
    </li>
  );
  return element;
}

//recursively sets property value to dangerouslySetInnerHTML of that value
function stringToElementForProp(srcObject: any, key: string): object {
  _.keys(srcObject).some(k => {
    if (k === key) {
      const value = srcObject[k];
      srcObject[k] = <span dangerouslySetInnerHTML={{ __html: value }}></span>;

      return srcObject;
    }
    if (srcObject[k] && typeof srcObject[k] === 'object') {
      stringToElementForProp(srcObject[k], key);
    }
  });
  return srcObject;
}
