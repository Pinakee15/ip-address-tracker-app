import React from 'react';
import { dummyIpData } from '../../../../assets/dummy-data/dummy-data';
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
        <div>
            <div className={"modal-container " + (props?.isLoading ? 'change-background' : '')}>
                {formatIpInfos(props?.ipInfos).map((info, i)=>{
                    return (
                        <div className="info-box" key={i} style={{paddingLeft : i==0 ? '0px' : '1.5rem'}}>
                            <p className="info-box__key">{Object.keys(info)[0]}</p>
                            <p className={"info-box__value "  + (props?.isLoading ? 'show-blurr' : '') }>{Object.values(info)[0]}</p>
                            <div className="info-box__left-border" style={{display : i==0 ? 'none' : 'block'}}></div>
                        </div>
                    )
                })}                
            </div>
            <div className="loader-text" style={{display : !props?.isLoading ? 'none' : 'block'}} >Loading...</div>
        </div>
	);
};

export default DisplayDetailsModal;

