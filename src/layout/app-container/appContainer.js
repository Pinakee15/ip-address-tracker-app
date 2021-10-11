import React , {useState , useEffect} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import { fetchIpLocations } from '../../services/ip-location-service';
import DisplayDetailsModal from '../../shared/entryComponents/Modals/displayDetailsModal/displayDetailsModal';
import MapComponent from '../../components/mapComponent/mapComponent';
import { checkForAuthentication } from '../../auth/auth';
import { useHistory } from 'react-router';

import './appContainer.css';


const style = {
    height : "275px"
};

const AppContainer = (props) => {

    const [inputIp , setInputIp] = useState('');
    const [ipInfos , setIpInfos] = useState({});
    const [coordinates , setCordinates] = useState([51.505, -0.09]);
    const history = useHistory();
    
    useEffect(()=>{

        if(!checkForAuthentication()){
            history.push("/");
        }

        fetchIpLocations(inputIp).then(res=>{
            if(res){
                let data = res?.data;
                setIpInfos({...data});
                setCordinates([data?.location?.lat, data?.location?.lng])
            }
        })
    }, [inputIp])

	return (

        <div className="app-container">

            <div className="app-container__upper-body" style={style}>
                <h1 className="upper-body__heading">IP Address Tracker</h1>
                <IpInputSearch setInputIp={setInputIp}/>
                <DisplayDetailsModal ipInfos={ipInfos} />
            </div>

            <div className="app-container__lower-body">
                <MapComponent ipInfos={ipInfos} coordinates={[...coordinates]} />
            </div>         
            
        </div>
	);
};

export default AppContainer;

