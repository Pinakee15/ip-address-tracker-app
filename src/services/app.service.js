// THIS SERVICE FILE WILL CONTAIN ALL THE HTTP REQUEST WITH OUR APP BACKEND

import axios from "axios";
import { API_PATH_CONSTANTS } from "../shared/constants/API_CONTANTS";
require('dotenv').config();

const postIpDetails = async (ipDetails , userId)=>{
    console.log("postIpDetails called ..")
    let data = {
        _id : userId,
        ip : ipDetails?.ip,
        country : ipDetails?.location?.country,
        region : ipDetails?.location?.region,
        city : ipDetails?.location?.city,
        timezone : ipDetails?.location?.timezone,
        coordinates : {
            lat : ipDetails?.location?.lat ,
            lng : ipDetails?.location?.lng
        },
        isp : ipDetails?.isp
    }

    axios({
        url: API_PATH_CONSTANTS.POST_USER_IP_DETAILS,
        method: 'POST',
        data
    })
        .then((res) => {console.log("api response  : ", res)})
        .catch((err) => {console.log("api error : ", err)});

}

export default postIpDetails;