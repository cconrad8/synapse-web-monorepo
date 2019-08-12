import { GenericCardSchema } from "synapse-react-client/dist/containers/GenericCard"
import loadingScreen from '../loadingScreen'
import { SynapseConstants } from "synapse-react-client"
import { HomeExploreConfig } from "types/portal-util-types"
export const toolsSql = 'SELECT * FROM syn16859448'

export const toolsSchema: GenericCardSchema = {
  type: 'TOOL',
  title: 'name',
  subTitle: 'contact',
  description: 'summary',
  icon: 'type',
  secondaryLabels: {
    0: { key: 'subtype', alias: 'Sub Type' },
    1: { key: 'diseaseFocus', alias: 'Disease Focus' },
    2: { key: 'manifestation', alias: 'Manifestation' },
    3: { key: 'fundingAgency', alias: 'Funding Agency' },
    4: { key: 'studyName', alias: 'Study Name' },
  },
  link: 'link',
}

const facetAliases = {
  studyName: 'Study Name',
  fundingAgency: 'Funding Agency',
  type: 'Type',
  subtype: 'Sub Type',
  diseaseFocus: 'Disease Focus',
  manifestation: 'Manifestation'
}
const computationalSql = "SELECT * FROM syn16859448 WHERE type = 'computational'"
const experimentalSql = "SELECT * FROM syn16859448 WHERE type = 'experimental'"
const clinicalSql = "SELECT * FROM syn16859448 WHERE type = 'clinical'"
const rgbIndex = 6

const tools: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      rgbIndex,
      unitDescription: 'Tools',
      link: 'Explore/Tools',
      linkText: 'Explore Tools',
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
            | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
            | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql: "SELECT * FROM syn16859448",
          isConsistent: false,
          limit: 25,
          offset: 0,
        },
      },
      facetName: 'type',
      facetAliases: {
        type: 'Type'
      }
    }
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      accordionConfig: [
        {
          name: 'Computational',
          unitDescription: 'tools from Computational',
          cardConfiguration: {
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: toolsSchema,
            loadingScreen
          },
          facetAliases,
          menuConfig: [
            {
              sql: computationalSql,
              facetName: 'studyName'
            },
            {
              sql: computationalSql,
              facetName: 'fundingAgency'
            },
            {
              sql: computationalSql,
              facetName: 'subtype'
            },
            {
              sql: computationalSql,
              facetName: 'diseaseFocus'
            },
            {
              sql: computationalSql,
              facetName: 'manifestation'
            },
          ]
        },
        {
          name: 'Experimental',
          unitDescription: 'tools from Experimental',
          cardConfiguration: {
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: toolsSchema,
            loadingScreen
          },
          facetAliases,
          menuConfig: [
            {
              sql: experimentalSql,
              facetName: 'studyName'
            },
            {
              sql: experimentalSql,
              facetName: 'fundingAgency'
            },
            {
              sql: experimentalSql,
              facetName: 'subtype'
            },
            {
              sql: experimentalSql,
              facetName: 'diseaseFocus'
            },
            {
              sql: experimentalSql,
              facetName: 'manifestation'
            },
          ]
        },
        {
          name: 'Clinical',
          unitDescription: 'tools from Clinical',
          cardConfiguration: {
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: toolsSchema,
            loadingScreen
          },
          menuConfig: [
            {
              sql: clinicalSql,
              facetName: 'studyName'
            },
            {
              sql: clinicalSql,
              facetName: 'fundingAgency'
            },
            {
              sql: clinicalSql,
              facetName: 'subtype'
            },
            {
              sql: clinicalSql,
              facetName: 'diseaseFocus'
            },
            {
              sql: clinicalSql,
              facetName: 'manifestation'
            },
          ]
        },
      ]
    }
  }
}

export default tools
