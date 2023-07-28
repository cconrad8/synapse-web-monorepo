import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SelfSignAccessRequirementItem from '../../src/components/AccessRequirementList/RequirementItem/SelfSignAccessRequirementItem'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../src/utils/context/SynapseContext'
import { mockSelfSignAccessRequirement } from '../../src/mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../../src/utils/functions/getEndpoint'
import { rest } from 'msw'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_STATUS,
} from '../../src/utils/APIConstants'
import {
  AccessApproval,
  AccessRequirementStatus,
  ApprovalState,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../../src/mocks/user/mock_user_profile'
import { getAccessRequirementHandlers } from '../../src/mocks/msw/handlers/accessRequirementHandlers'
import { getWikiHandlers } from '../../src/mocks/msw/handlers/wikiHandlers'
import { getCurrentUserCertifiedValidatedHandler } from '../../src/mocks/msw/handlers/userProfileHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/SelfSignAccessRequirementItem',
  component: SelfSignAccessRequirementItem,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  render: args => (
    <SynapseContextConsumer>
      {context => (
        <SynapseContextProvider
          synapseContext={{
            ...context,
            accessToken: args.isAuthenticated
              ? context.accessToken ?? 'fake token'
              : undefined,
          }}
        >
          <SelfSignAccessRequirementItem {...args} />
        </SynapseContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const RequiresUnmetCertificationAndValidation: Story = {
  args: {
    accessRequirement: {
      ...mockSelfSignAccessRequirement,
      isCertifiedUserRequired: true,
      isValidatedProfileRequired: true,
    },
  },
  parameters: {
    msw: {
      handlers: [
        // ...getHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false),
        rest.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

          async (req, res, ctx) => {
            const response: AccessRequirementStatus = {
              accessRequirementId: req.params.id as string,
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: false,
            }
            return res(ctx.status(200), ctx.json(response))
          },
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              submitterId: MOCK_USER_ID.toString(),
              accessorId: MOCK_USER_ID.toString(),
              state: ApprovalState.APPROVED,
            }
            return res(ctx.status(201), ctx.json(response))
          },
        ),
      ],
    },
  },
}
