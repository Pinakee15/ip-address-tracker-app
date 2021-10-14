// THIS SERVICE FILE WILL CONTAIN ALL THE HTTP REQUEST RELATED TO IPIFY APIS 

import axios from "axios";
import { API_PATH_CONSTANTS } from "../shared/constants/API_CONTANTS";
require('dotenv').config();

const {REACT_APP_IP_LOCATION_API_KEY} = process.env;

export let fetchIpLocations = async (ipAddress)=>{
    
    if (!ipAddress) {
        return await undefined;
    }

    return axios.get(API_PATH_CONSTANTS['IPIFY_URL'] + '?apiKey=' + REACT_APP_IP_LOCATION_API_KEY + '&domain=' + ipAddress)
}

