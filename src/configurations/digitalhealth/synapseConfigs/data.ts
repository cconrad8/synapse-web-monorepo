import { HomeExploreConfig } from 'types/portal-config'
import facetAliases from '../facetAliases'
import loadingScreen from '../loadingScreen'
import { LabelLinkConfig } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { StandaloneQueryWrapperProps } from 'portal-components/StandaloneQueryWrapper'
import { dataSql } from '../resources'

const unitDescription = 'Data'
const rgbIndex = 0
const facet = 'Program'
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'dataDescriptionLocation',
    isMarkdown: true,
  },
  {
    matchColumnName: 'dataAccessInstructions',
    isMarkdown: true,
  },
  {
    matchColumnName: 'studyOrProject',
    isMarkdown: true,
  },
]

const data: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      unitDescription,
      rgbIndex,
      facet,
      loadingScreen,
      link: 'Explore/Studies',
      linkText: 'Explore Studies',
      sql: dataSql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      shouldDeepLink: true,
      hideDownload: true,
      loadingScreen,
      sql: dataSql,
      name: 'Data',
      facetAliases,
      tableConfiguration: {
        columnLinks: dataColumnLinks,
      },
      facetsToPlot: [
        'study',
        'reportedOutcome',
        'dataCollectionMethod',
        'deviceType',
        'devicePlatform',
        'deviceLocation',
        'diagnosis',
        'digitalAssessmentCategory',
        'dataType',
        'dataSubtype',
      ],
      searchConfiguration: {
        searchable: [
          {
            columnName: 'studyOrProject',
          },
          {
            columnName: 'reportedOutcome',
          },
          {
            columnName: 'devicePlatform',
          },
          {
            columnName: 'diagnosis',
          },
          {
            columnName: 'digitalAssessmentCategory',
          },
          {
            columnName: 'digitalAssessmentDetails',
          },
        ],
      },
    },
  },
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  title: 'Data Files',
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: '=',
}

export default data
