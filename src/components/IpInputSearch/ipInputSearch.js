import React, { useState } from 'react';
import arrowButton from '../../assets/images/icon-arrow.svg';
import './ipInputSearch.css';


const IpInputSearch = (props) => {

    const [ip, setIp] = useState('');
	const submitIp = (e) => {
		e.preventDefault();
        console.log("Submitted value : ", e , " and onchange value : ", ip)
        props.setInputIp(ip)
	};

    // fetch api data
    // fetch('https://geo.ipify.org/api/v2/country?apiKey=at_zEeg3r3heV9zVzwTF96QYOp15HLwT&ipAddress=8.8.8.8')
    //     .then(response => response.json())
    //     .then(data => console.log("Fetched data : ",  data));
    
	return (
        <div>
            <form onSubmit={submitIp}>
                <input
                    className='search-ip-input'
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    placeholder='Search for any IP address or domain'
                />
                <button className='submit-btn' type='submit'>
                    <img className='arrow-img' src={arrowButton} alt='icon' />
                </button>
            </form>
            {/* <div>{ip}</div> */}
        </div>
	);
};

export default IpInputSearch;

// https://geo.ipify.org/api/v2/country,city?apiKey=at_zEeg3r3heV9zVzwTF96QYOp15HLwT&ipAddress=8.8.8.8

