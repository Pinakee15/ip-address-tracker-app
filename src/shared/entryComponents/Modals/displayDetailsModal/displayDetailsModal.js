import React, { useState } from 'react';
import './displayDetailsModal.css';

let ipInfos = {
    "ip": "31.13.70.36",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Los Angeles",
        "lat": 34.05223,
        "lng": -118.24368,
        "postalCode": "90001",
        "timezone": "-07:00",
        "geonameId": 5368361
    },
    "domains": [
        "edge-star-mini-shv-01-lax3.facebook.com",
        "facebook.com",
        "fb.com",
        "fb.me",
        "fbcdn.net"
    ],
    "as": {
        "asn": 32934,
        "name": "Facebook Inc",
        "route": "31.13.70.0/24",
        "domain": "https://www.facebook.com/",
        "type": "Content"
    },
    "isp": "Facebook Ireland Ltd",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
}

let finalInfo = [{'IP ADDRESS' : ipInfos['ip']} , {'LOCATION' : ipInfos['location']['city'] + ipInfos['location']['region'] + ipInfos['location']['country']},
                 {'TIMEZONE' : ipInfos['location']['timezone']} , {'ISP' : ipInfos['isp']}]

const DisplayDetailsModal = (props) => {

    const [ipInfo, setIpInfo] = useState('');
    const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];
    
	return (
        <div className="modalContainer">
            {finalInfo.map(info=>{
                return (
                    <div>
                        <p>{Object.keys(info)[0]}</p>
                        <p>{Object.values(info)[0]}</p>
                    </div>
                )
            })}
        </div>
	);
};

export default DisplayDetailsModal;

