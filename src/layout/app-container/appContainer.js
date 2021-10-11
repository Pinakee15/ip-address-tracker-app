import React , {useState , useEffect} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import { fetchIpLocations } from '../../services/ip-location-service';
import DisplayDetailsModal from '../../shared/entryComponents/Modals/displayDetailsModal/displayDetailsModal';
import MapComponent from '../../components/mapComponent/mapComponent';
import { checkForAuthentication } from '../../auth/auth';
import { validURL } from '../../utils/utils';
import { useHistory } from 'react-router';

import './appContainer.css';


const AppContainer = (props) => {

    const [inputIp , setInputIp] = useState('');
    const [ipInfos , setIpInfos] = useState({});
    const [coordinates , setCordinates] = useState([37.38605, -122.08385]);
    const history = useHistory();
    
    useEffect(()=>{

        if(!checkForAuthentication()){
            history.push("/");
        }

        if(validURL(inputIp)){
            fetchIpLocations(inputIp).then(res=>{
                if(res){
                    let data = res?.data;
                    setIpInfos({...data});
                    setCordinates([data?.location?.lat, data?.location?.lng])
                }
            }).catch(err=>{
                console.log("This is the error : ", err);
            })
        }

    }, [inputIp])

	return (

        <div className="app-container">

            <div className="app-container__upper-body">
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

