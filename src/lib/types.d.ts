// TODO: Figure out a way to get the actual types for plotly if need be
// https://stackoverflow.com/questions/39084438/how-to-import-plotly-js-into-typescript
declare module 'plotly.js-basic-dist'
declare module 'react-plotly.js/factory'
declare module 'browser-md5-file'
declare module 'sql-parser'
declare module 'react-native-rss-parser'
declare module 'lodash.clonedeep'

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.scss'