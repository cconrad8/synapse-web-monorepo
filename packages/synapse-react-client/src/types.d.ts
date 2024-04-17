declare module '*.svg' {
  import React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}

declare module 'markdown-it-sub-alt' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-sup-alt' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-center-text' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-synapse-heading' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-synapse-table' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-strikethrough-alt' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-container' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-emphasis-alt' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-inline-comments' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-synapse-math' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
declare module 'markdown-it-br' {
  import type MarkdownIt from 'markdown-it'
  const plugin = MarkdownIt.PluginSimple
  export = plugin
}
