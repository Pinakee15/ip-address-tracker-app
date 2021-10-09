import React, { useState } from 'react';
import './header.css';
import { constants } from '../../constants/constants';

const Header = (props) => {
    const style = {
        height : "250px"
      };

	return (
        <div className='header-container' style={style}>
            <h1 className="header__description">IP Address Tracker</h1>     
        </div>
	);
};

export default Header;

