import React , {useState} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import './appContainer.css';


const AppContainer = (props) => {

    const style = {
        height : "275px"
    };

	return (
        // <div className='header-container' style={style}>
        //     <h1 className="header__description">IP Address Tracker</h1>     
        //     <IpInput ipAdress="ipAdress" submitIpAddress="submitIpAddress"/>            
        // </div>
        <div className="app-container">

            <div className="app-container__upper-body" style={style}>
                <h1 className="upper-body__heading">IP Address Tracker</h1>
                <IpInputSearch />
            </div>

            <div className="app-container__upper-body">

            </div>
        </div>
	);
};

export default AppContainer;

