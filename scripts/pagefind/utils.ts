const PARENT_NAME = "pages";
const AUTO_COMPLETE_NAME = `${PARENT_NAME}/AutoComplete`;
const PAGEFIND_NAME = `${PARENT_NAME}/Pagefind`;
const PARAM_PARSER_NAME = `${PARENT_NAME}/ParamParser`;

function getLogFormat(name: string, massage: string, data?: unknown) {
  if (data == null) {
    return `[${name}] ${massage}`;
  }

  return `[${name}] ${massage}: ${data}`;
}

export const formatForAutocompleteLogging = (m, d?) => getLogFormat(AUTO_COMPLETE_NAME, m, d);
export const formatForPagefindLogging = (m, d?) => getLogFormat(PAGEFIND_NAME, m, d);
export const formatForParamParser = (m, d?) => getLogFormat(PARAM_PARSER_NAME, m, d);
