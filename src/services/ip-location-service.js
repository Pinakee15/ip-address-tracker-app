import axios from "axios";
import { API_PATH_CONSTANTS } from "../shared/constants/API_CONTANTS";


let {REACT_APP_IP_LOCATION_API_KEY} = process.env

export let fetchIpLocations = async (ipAddress)=>{
    
    if (!ipAddress) {
        return await undefined;
    }

    return axios.get(API_PATH_CONSTANTS['IPIFY_URL'] + '?apiKey=' + REACT_APP_IP_LOCATION_API_KEY + '&domain=' + ipAddress)
}

