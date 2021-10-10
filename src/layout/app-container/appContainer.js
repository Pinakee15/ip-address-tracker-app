import React , {useState} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import './appContainer.css';


const AppContainer = (props) => {

    const [inputIp , setInputIp] = useState('');

    const style = {
        height : "275px"
    };

	return (

        <div className="app-container">

            <div className="app-container__upper-body" style={style}>
                <h1 className="upper-body__heading">IP Address Tracker</h1>
                <IpInputSearch setInputIp={setInputIp}/>
            </div>

            <div className="app-container__upper-body">

            </div>         
            <div>Ip input : {inputIp}</div>
        </div>
	);
};

export default AppContainer;

