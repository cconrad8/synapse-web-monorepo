import { Alert, Box, TextField, Typography } from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import React, { useImperativeHandle, useMemo, useState } from 'react'
import { useUpdateAccessRequirement } from '../../synapse-queries'
import { SynapseClientError } from '../../utils'
import { DAY_IN_MS } from '../../utils/SynapseConstants'
import { UploadDocumentField } from '../AccessRequirementList/ManagedACTAccessRequirementRequestFlow/UploadDocumentField'
import {
  AccessRequirementWikiInstructions,
  AccessorRequirements,
} from '../SetBasicAccessRequirementFields'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { Checkbox } from '../widgets/Checkbox'

export const DUC_TEMPLATE_UPLOAD_ERROR =
  'There was an error uploading the DUC template. '

export const getValidExpirationPeriodOrErrorMessage = (
  expirationPeriodDays: string,
) => {
  if (expirationPeriodDays === '') return 0

  const msgPrefix = 'Please enter a valid expiration period (in days): '
  if (/^[-]?\d+$/.test(expirationPeriodDays)) {
    const num = Number(expirationPeriodDays)
    if (num < 0) {
      return `${msgPrefix}If expiration period is set, then it must be greater than 0.`
    }
    return num * DAY_IN_MS
  }
  return `${msgPrefix}For input string: "${expirationPeriodDays}"`
}

export type SetManagedAccessRequirementFieldsHandle = {
  /* Allow the parent component to trigger saving the AR, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type SetManagedAccessRequirementFieldsProps = {
  accessRequirement: ManagedACTAccessRequirement
  /* Called when AR has been saved or an error has been returned */
  onSaveComplete: (
    /* null when an error has been returned */
    updatedAr: ManagedACTAccessRequirement | null,
  ) => void
}

export const SetManagedAccessRequirementFields = React.forwardRef(
  function SetManagedAccessRequirementFields(
    props: SetManagedAccessRequirementFieldsProps,
    ref: React.ForwardedRef<SetManagedAccessRequirementFieldsHandle>,
  ) {
    const { accessRequirement, onSaveComplete } = props

    const [uploadDucTemplateError, setUploadDucTemplateError] = useState<
      string | null
    >(null)
    const [expirationPeriodError, setExpirationPeriodError] = useState<
      string | null
    >(null)
    const [updateArError, setUpdateArError] = useState<string | null>(null)

    const [updatedAr, setUpdatedAr] =
      useState<ManagedACTAccessRequirement>(accessRequirement)
    const [expirationPeriodDays, setExpirationPeriodDays] = useState<string>(
      (accessRequirement.expirationPeriod / DAY_IN_MS).toString(),
    )

    const ducTemplateFileHandleAssociation = useMemo(() => {
      if (updatedAr.ducTemplateFileHandleId) {
        const ducTemplateFileHandleAssociation: FileHandleAssociation = {
          fileHandleId: updatedAr.ducTemplateFileHandleId,
          associateObjectType:
            FileHandleAssociateType.AccessRequirementAttachment,
          associateObjectId: updatedAr.id.toString(),
        }
        return ducTemplateFileHandleAssociation
      }
      return undefined
    }, [updatedAr.ducTemplateFileHandleId, updatedAr.id])

    const uploadDucTemplateCallback = (data: UploadCallbackResp) => {
      if (data.resp && data.success) {
        setUploadDucTemplateError(null)
        // Files are uploaded and synced with the server immediately
        const uploadResponse: FileUploadComplete = data.resp
        setUpdatedAr({
          ...updatedAr,
          ducTemplateFileHandleId: uploadResponse.fileHandleId,
        })
      } else if (!data.success && data.error) {
        setUploadDucTemplateError(
          `${DUC_TEMPLATE_UPLOAD_ERROR} ${
            (data.error as SynapseClientError).reason
          }`,
        )
      }
    }

    const {
      mutate: updateAccessRequirement,
      isPending: isUpdatingAccessRequirement,
    } = useUpdateAccessRequirement<ManagedACTAccessRequirement>({
      onSuccess: updatedAr => {
        setUpdateArError(null)
        onSaveComplete(updatedAr)
      },
      onError: error => {
        setUpdateArError(error.reason)
        onSaveComplete(null)
      },
    })

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            const expirationPeriodOrErrorMessage =
              getValidExpirationPeriodOrErrorMessage(expirationPeriodDays)
            if (typeof expirationPeriodOrErrorMessage === 'string') {
              setExpirationPeriodError(expirationPeriodOrErrorMessage)
              onSaveComplete(null)
            } else {
              updateAccessRequirement({
                ...updatedAr,
                expirationPeriod: expirationPeriodOrErrorMessage,
              })
            }
          },
        }
      },
      [
        expirationPeriodDays,
        updatedAr,
        updateAccessRequirement,
        onSaveComplete,
      ],
    )

    return (
      <>
        <AccessRequirementWikiInstructions accessRequirement={updatedAr} />
        <Box>
          <Typography
            bgcolor="#f5f5f5"
            borderBottom="1px solid #ddd"
            color="#333"
            px={2}
            py={1}
          >
            Data Access Request Parameters
          </Typography>
          <Box mt={2} mb={4}>
            <AccessorRequirements
              accessRequirement={updatedAr}
              onChange={updatedAr =>
                setUpdatedAr(updatedAr as ManagedACTAccessRequirement)
              }
            />
            <Box mb={2}>
              <Typography variant="body1" fontWeight={700}>
                DUC
              </Typography>
              <Checkbox
                label="DUC is required."
                checked={updatedAr.isDUCRequired}
                onChange={(checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    isDUCRequired: checked,
                  })
                }
              />
              <SynapseErrorBoundary>
                <UploadDocumentField
                  id="duc"
                  isLoading={isUpdatingAccessRequirement}
                  uploadCallback={resp => uploadDucTemplateCallback(resp)}
                  documentName="Template DUC"
                  fileHandleAssociations={
                    ducTemplateFileHandleAssociation
                      ? [ducTemplateFileHandleAssociation]
                      : undefined
                  }
                  isMultiFileUpload={false}
                  uploadBtnVariant="contained"
                />
                {uploadDucTemplateError && (
                  <Alert severity="error" sx={{ marginTop: 2 }}>
                    {uploadDucTemplateError}
                  </Alert>
                )}
              </SynapseErrorBoundary>
              <Checkbox
                label="IRB approval is required."
                checked={updatedAr.isIRBApprovalRequired}
                onChange={(checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    isIRBApprovalRequired: checked,
                  })
                }
              />
              <Checkbox
                label="Other documents are required."
                checked={updatedAr.areOtherAttachmentsRequired}
                onChange={(checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    areOtherAttachmentsRequired: checked,
                  })
                }
              />
              <TextField
                id="expirationPeriod"
                name="expirationPeriod"
                label="Expiration period (days)"
                value={expirationPeriodDays}
                sx={{ mt: 1 }}
                fullWidth
                onChange={event => {
                  setExpirationPeriodError(null)
                  setExpirationPeriodDays(event.target.value)
                }}
              />
              {expirationPeriodError && (
                <Alert severity="error" sx={{ marginTop: 2 }}>
                  {expirationPeriodError}
                </Alert>
              )}
              <Box mt={1}>
                <Checkbox
                  label="Intended Data Use statement is required."
                  checked={updatedAr.isIDURequired}
                  onChange={(checked: boolean) => {
                    if (checked) {
                      setUpdatedAr({
                        ...updatedAr,
                        isIDURequired: true,
                      })
                    } else {
                      setUpdatedAr({
                        ...updatedAr,
                        isIDURequired: false,
                        isIDUPublic: false,
                      })
                    }
                  }}
                />
                <Checkbox
                  label="Intended Data Use statements will be publicly available."
                  checked={updatedAr.isIDUPublic}
                  disabled={!updatedAr.isIDURequired}
                  onChange={(checked: boolean) =>
                    setUpdatedAr({
                      ...updatedAr,
                      isIDUPublic: checked,
                    })
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
        {updateArError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {updateArError}
          </Alert>
        )}
      </>
    )
  },
)
