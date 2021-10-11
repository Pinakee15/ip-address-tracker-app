// THIS FILE CONTAINS ALL THE UTILITY FUNCTIONS

import { REGEX_CONSTANTS } from "../shared/constants/REGEX_CONSTANTS";

export const validURL = (str)=> {
    var pattern = new RegExp(REGEX_CONSTANTS.WEBSITE_URL_PATTERN);
    return !!pattern.test(str);
  }