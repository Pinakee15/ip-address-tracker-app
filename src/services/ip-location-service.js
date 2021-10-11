import axios from "axios";
import { API_PATH_CONSTANTS } from "../shared/constants/API_CONTANTS";

// FUNCTION FOR FETCHING LOCATION WHEN GIVEN IP-ADDRESS AS A PARAMETER
let {REACT_APP_IP_LOCATION_API_KEY} = process.env


export let fetchIpLocations = async (ipAddress)=>{

    if (!ipAddress) {
        console.log("USE EFFECT WAS CALLED ....");
        return await undefined;
    }

    return axios.get(API_PATH_CONSTANTS['IPIFY_URL'] + '?apiKey=' + REACT_APP_IP_LOCATION_API_KEY + '&domain=' + ipAddress)
}

