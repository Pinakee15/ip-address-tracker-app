import React, { useState } from 'react';
import arrowButton from '../../assets/images/icon-arrow.svg';
import './ipInputSearch.css'

const IpInputSearch = (props) => {

    const [ip, setIp] = useState('');
	const submitIp = (e) => {
		e.preventDefault();
        console.log("Submitted value : ", e , " and onchange value : ", ip)
        props.setInputIp(ip)
		//props.setSearchedIp(ip);
	};
    
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
