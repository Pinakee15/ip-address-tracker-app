import { STORAGE_CONSTANTS } from '../shared/constants/STORAGE_CONSTANTS';

export const checkForAuthentication = ()=>{
    let userId = localStorage.getItem(STORAGE_CONSTANTS.USER_ID);
    return userId ? true : false
}

export const storeUserId = (userId)=>{
    localStorage.setItem(STORAGE_CONSTANTS.USER_ID , `${userId}`);
}
