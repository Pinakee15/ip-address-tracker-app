// THIS FILE WILL CONTAIN ALL THE REGEX PATTERN CONTANTS 

export const REGEX_CONSTANTS = {
    WEBSITE_URL_PATTERN  : '^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$'
}