import {
  ColumnModel,
  ColumnTypeEnum,
  EntityType,
  JsonSubColumnModel,
} from '@sage-bionetworks/synapse-types'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import React, { useEffect, useMemo } from 'react'
import {
  ColumnModelFormData,
  getIsAllSelected,
  getNumberOfSelectedItems,
  JsonSubColumnModelFormData,
  tableColumnSchemaFormDataAtom,
} from './TableColumnSchemaFormReducer'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox as MUICheckbox,
  Typography,
} from '@mui/material'
import { isEqual, times } from 'lodash-es'
import { selectAtom } from 'jotai/utils'
import ColumnModelForm from './ColumnModelForm'
import AddToList from '../../assets/icons/AddToList'
import { North, South } from '@mui/icons-material'
import IconSvg from '../IconSvg'

const COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS =
  '18px 18px 2fr 2fr 0.75fr 1fr 1fr 1fr 1fr'
const GRID_CONTAINER_Y_MARGIN_PX = 6
export const HIERARCHY_VERTICAL_LINE_COMPONENT = (
  <Box
    sx={{
      width: '1px',
      height: `calc(100% + 2 * ${GRID_CONTAINER_Y_MARGIN_PX}px)`,
      backgroundColor: 'grey.400',
      marginLeft: '8px',
    }}
  />
)
export const HIERARCHY_END_COMPONENT = (
  <Box
    sx={theme => ({
      width: '50%',
      height: '60%',
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      marginLeft: '8px',
      marginBottom: 'auto',
      marginRight: '0',
      borderBottomLeftRadius: '5px',
    })}
  />
)
type TableColumnSchemaFormProps = {
  /* The type of the Table, which determines various schema restrictions and form functionality */
  entityType: EntityType
  initialData?: ColumnModel[]
}

export default function TableColumnSchemaForm(
  props: TableColumnSchemaFormProps,
) {
  const { initialData, entityType } = props

  const numColumnModels = useAtomValue(
    useMemo(() => atom(get => get(tableColumnSchemaFormDataAtom).length), []),
  )

  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  useEffect(() => {
    if (initialData) {
      dispatch({
        type: 'setValue',
        value: initialData.map(
          (cm: ColumnModel): ColumnModelFormData => ({
            ...cm,
            jsonSubColumns: cm.jsonSubColumns?.map(
              (jsc: JsonSubColumnModel): JsonSubColumnModelFormData => ({
                ...jsc,
                isSelected: false,
              }),
            ),
            isSelected: false,
          }),
        ),
      })
    }
  }, [])

  return (
    <>
      <TableColumnSchemaFormActions />
      <Box
        display={'grid'}
        sx={{
          gridTemplateColumns: COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS,
          py: 1.25,
          fontWeight: 700,
          borderBottom: '2px solid',
          borderColor: 'grey.300',
        }}
        gap={'8px'}
      >
        <Box>{/* Checkbox */}</Box>
        <Box sx={{ gridColumn: '2 / span 2' }}>Column Name</Box>
        <Box>Column Type</Box>
        <Box>Size</Box>
        <Box>Max List Length</Box>
        <Box>Default Value</Box>
        <Box>Restrict Values</Box>
        <Box>Facet</Box>
        {times(numColumnModels, index => {
          return (
            <TableColumnSchemaFormRow
              entityType={entityType}
              columnModelIndex={index}
              key={index}
            />
          )
        })}
      </Box>

      <Button
        onClick={() => {
          dispatch({ type: 'appendColumn' })
        }}
      >
        Add Column
      </Button>
      {/*  Add / import buttons here  */}
    </>
  )
}

function TableColumnSchemaFormActions() {
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  const columnModels = useAtomValue(tableColumnSchemaFormDataAtom)
  const allSelected = getIsAllSelected(columnModels)
  const numSelected = getNumberOfSelectedItems(columnModels)

  return (
    <Box display={'flex'} gap={1}>
      <Button
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'toggleSelectAll' })
        }}
      >
        {/*
           MUI Checkbox looks a little different from ours, but it has an indeterminate state
           TODO: reconcile these differences
          */}
        <MUICheckbox
          size={'small'}
          checked={allSelected}
          indeterminate={numSelected > 0 && !allSelected}
        />
        <Typography variant="smallText1" color={'text.secondary'}>
          {numSelected} selected
        </Typography>
      </Button>
      <ButtonGroup>
        <Button
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveDown' })
          }}
          disabled={numSelected == 0}
        >
          <South fontSize={'small'} />
        </Button>
        <Button
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveUp' })
          }}
          disabled={numSelected == 0}
        >
          <North fontSize={'small'} />
        </Button>
      </ButtonGroup>
      <Button
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'delete' })
        }}
        disabled={numSelected == 0}
      >
        <IconSvg fontSize={'small'} icon={'delete'} wrap={false} />
      </Button>
    </Box>
  )
}

type TableColumnSchemaFormRowProps = {
  entityType: EntityType
  columnModelIndex: number
}

function TableColumnSchemaFormRow(props: TableColumnSchemaFormRowProps) {
  const { columnModelIndex, entityType } = props
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const columnModel = useAtomValue(
    useMemo(
      () =>
        selectAtom(
          tableColumnSchemaFormDataAtom,
          v => v[columnModelIndex],
          isEqual,
        ),
      [columnModelIndex],
    ),
  )

  if (!columnModel) {
    return <></>
  }

  return (
    <>
      <ColumnModelForm
        entityType={entityType}
        columnModelIndex={columnModelIndex}
      />
      {columnModel.columnType === ColumnTypeEnum.JSON &&
        columnModel.jsonSubColumns &&
        columnModel.jsonSubColumns.map((subcolumnFacet, index) => (
          <ColumnModelForm
            key={index}
            entityType={entityType}
            columnModelIndex={columnModelIndex}
            jsonSubColumnIndex={index}
          />
        ))}
      {columnModel.columnType === ColumnTypeEnum.JSON && (
        <>
          <Box
            sx={{
              gridColumn: '1 / span 2',
            }}
          >
            {HIERARCHY_END_COMPONENT}
          </Box>
          <Box>
            <Button
              startIcon={<AddToList />}
              variant={'text'}
              onClick={() =>
                dispatch({ type: 'appendJsonSubColumn', columnModelIndex })
              }
            >
              Add sub-column
            </Button>
          </Box>
        </>
      )}
    </>
  )
}
