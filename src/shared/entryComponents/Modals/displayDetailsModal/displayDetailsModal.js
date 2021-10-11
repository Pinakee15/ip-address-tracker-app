import React from 'react';
import { dummyIpData } from '../../../../assets/dummy-data/dummy-data';
import './displayDetailsModal.css';


let formatIpInfos = (ipInfos)=>{
    console.log("IP INFOS : ", ipInfos);
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
        <div className="modal-container">
            {formatIpInfos(props?.ipInfos).map((info, i)=>{
                return (
                    <div className="info-box" key={i} style={{paddingLeft : i==0 ? '0px' : '1.5rem'}}>
                        <p className="info-box__key">{Object.keys(info)[0]}</p>
                        <p className="info-box__value">{Object.values(info)[0]}</p>
                        <div className="info-box__left-border" style={{display : i==0 ? 'none' : 'block'}}></div>
                    </div>
                )
            })}
        </div>
	);
};

export default DisplayDetailsModal;

