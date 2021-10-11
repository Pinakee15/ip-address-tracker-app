import React, { useState } from 'react';
import { dummyIpData } from '../../../../assets/dummy-data/dummy-data';
import IpInputSearch from '../../../../components/IpInputSearch/ipInputSearch';
import './displayDetailsModal.css';


let formatIpInfos = (ipInfos)=>{

    if(Object.keys(ipInfos).length==0){
        ipInfos = dummyIpData;
    }

    return [
            {'IP ADDRESS' : ipInfos['ip']} , 
            {'LOCATION' : (ipInfos?.location?.city ? ipInfos?.location?.city + ', ' : '') + 
                (ipInfos?.location?.region ? ipInfos?.location?.region + ', ' : '') + 
                (ipInfos?.location?.country ? ipInfos?.location?.country : '')},
            {'TIMEZONE' : ipInfos?.location?.timezone} , {'ISP' : ipInfos['isp']}
        ]
}

const DisplayDetailsModal = (props) => {

	return (
        <div className="modalContainer">
            {formatIpInfos(props?.ipInfos).map((info, i)=>{
                return (
                    <div key={i}>
                        <p>{Object.keys(info)[0]}</p>
                        <p>{Object.values(info)[0]}</p>
                    </div>
                )
            })}
        </div>
	);
};

export default DisplayDetailsModal;

