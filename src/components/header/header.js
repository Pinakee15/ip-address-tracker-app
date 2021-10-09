import React, { useState } from 'react';
import './header.css';
import { constants } from '../../constants/constants';

const Header = (props) => {
    const style = {
        height : "250px"
      };

	return (
        <div className='header' style={style}>
            <h2>IP Address Tracker</h2>      

        </div>
	);
};

export default Header;

