import React , {useState , useEffect} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import './appContainer.css';
import { fetchIpLocations } from '../../services/ip-location-service';
import DisplayDetailsModal from '../../shared/entryComponents/Modals/displayDetailsModal/displayDetailsModal';

const style = {
    height : "275px"
};

const AppContainer = (props) => {

    const [inputIp , setInputIp] = useState('');
    
    useEffect(()=>{
        // fetchIpLocations(inputIp).then(res=>{
        //     console.log("THIS IS THE AXIOS RESPONSE : ", res?.data);
        // })
    }, [inputIp])

	return (

        <div className="app-container">

            <div className="app-container__upper-body" style={style}>
                <h1 className="upper-body__heading">IP Address Tracker</h1>
                <IpInputSearch setInputIp={setInputIp}/>
                <DisplayDetailsModal />
            </div>

            <div className="app-container__upper-body">

            </div>         
            {/* <div>Ip input : {inputIp}</div> */}
        </div>
	);
};

export default AppContainer;

