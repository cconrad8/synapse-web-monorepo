// Process ${widgetname?param1=1&param2=2}

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
var REFERENCE_START = 'reference?';
var BOOKMARK_START = 'bookmark?';

var suffix;
var widgetIndex;
var footnoteId;
var footnotes;
var initialized = false;


function getParamValue(params, name) {
  var queryStringArray, queryStringParamArray, nameValue = null, i, queryStringNameValueArray;
  queryStringArray = params.split('?');
  queryStringParamArray = queryStringArray[1].split('&');
  for (i = 0; i < queryStringParamArray.length; i++) {
    queryStringNameValueArray = queryStringParamArray[i].split('=');
    if (name === queryStringNameValueArray[0]) {
      nameValue = queryStringNameValueArray[1];
    }
  }
  return nameValue;
}

function synapse(state, silent) {
  var found,
      content,
      token,
      max = state.posMax,
      start = state.pos,
      widgetParams,
      decodedWidgetParams,
      footnoteText,
      widgetContainerClass = 'widgetContainer';
  if (start + 3 >= max) { return false; }
  if (state.src.charCodeAt(start) !== 0x24/* $ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x7B/* { */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  state.pos = start + 2;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7D/* } */) {
      found = true;
      break;
    }

    state.md.inline.skipToken(state);
  }

  if (!found || start + 2 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 2, state.pos);
  widgetParams = content.replace(UNESCAPE_RE, '$1');
  if (content.lastIndexOf(REFERENCE_START, 0) === 0) {
    // If reference widget, then add an addditional widget param and output token.
    widgetParams += '&footnoteId=' + footnoteId;
    token         = state.push('synapse_reference_open', 'span', 1);
    token.attrs = [ [ 'id', 'wikiReference' + footnoteId ] ];
    token         = state.push('synapse_reference_close', 'span', -1);
    // also push bookmark markdown into the environment variable
    // (will be reprocessed and appended to the html output from the first pass)
    decodedWidgetParams = decodeURIComponent(widgetParams);
    footnoteText = getParamValue(decodedWidgetParams, 'text');
    if (footnoteText) {
      footnotes += '${bookmark?text=[' + footnoteId +
      ']&bookmarkID=wikiReference' + footnoteId + '} ' + footnoteText + '\n';
    }
    footnoteId++;
    widgetContainerClass = 'inlineWidgetContainer';
  } else if (content.lastIndexOf(BOOKMARK_START, 0) === 0) {
    // If bookmark widget, add additional span (target)
    token         = state.push('synapse_footnote_target_open', 'span', 1);
    token.attrs = [ [ 'id', 'wikiFootnote' + footnoteId ] ];
    token         = state.push('synapse_footnote_target_close', 'span', -1);

    footnoteId++;
    widgetContainerClass = 'inlineWidgetContainer';
  }

  // NOTE: allows unescaped spaces/newlines inside content
  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  // Earlier we checked !silent, but this implementation does not need it
  token         = state.push('synapse_open', 'span', 1);
  token.markup  = '${';
  token.attrs = [ [ 'widgetparams', widgetParams ],
    [ 'class', widgetContainerClass ],
    [ 'id', 'widget-' + widgetIndex + suffix ] ];

  token         = state.push('synapse_close', 'span', -1);
  token.markup  = '}';

  state.pos = state.posMax + 1;
  state.posMax = max;
  widgetIndex = widgetIndex + 1;
  return true;
}


module.exports = function synapse_plugin(md, _suffix) {
  widgetIndex = 0;
  footnoteId = 1;
  suffix = _suffix;
  footnotes = '';
  if (!initialized) {
    md.inline.ruler.after('emphasis', 'synapse', synapse);
    initialized = true;
  }
};

module.exports.footnotes = function() {
  return footnotes;
};

module.exports.resetFootnoteId = function() {
  footnoteId = 1;
};
