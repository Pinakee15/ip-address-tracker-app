import React, { useState } from 'react';
import arrowButton from '../../assets/images/icon-arrow.svg';
import './ipInputSearch.css'

const IpInputSearch = (props) => {

    const [ip, setIp] = useState('');
	const submitValue = (e) => {
		e.preventDefault();
        console.log("Submitted value : ", e , " and onchange value : ", ip)
		//props.setSearchedIp(ip);
	};
    
	return (
        <div>
            <form onSubmit={submitValue}>
                <input
                    className='search-ip-input'
                    placeholder='Search for any IP address or domain'
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                />
                <button className='submit-btn' type='submit'>
                    <img className='arrow-img' src={arrowButton} alt='icon' />
                </button>
            </form>
            <div>{ip}</div>
        </div>
	);
};

export default IpInputSearch;

