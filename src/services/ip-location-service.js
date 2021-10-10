import axios from "axios";
import { API_CONSTANTS } from "../shared/constants/API_CONTANTS";

// FUNCTION FOR FETCHING LOCATION WHEN GIVEN IP-ADDRESS AS A PARAMETER
let API_KEY = "at_zEeg3r3heV9zVzwTF96QYOp15HLwT"


export let fetchIpLocations = async (ipAddress)=>{

    if (!ipAddress) {
        console.log("USE EFFECT WAS CALLED ....");
        return await "No data";
    }

    return axios.get(API_CONSTANTS['IPIFY_URL'] + '?apiKey=' + API_KEY + '&domain=' + ipAddress)
}

