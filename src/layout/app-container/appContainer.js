import React , {useState , useEffect} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import { fetchIpLocations } from '../../services/ip-location-service';
import DisplayDetailsModal from '../../shared/entryComponents/Modals/displayDetailsModal/displayDetailsModal';
import MapComponent from '../../components/mapComponent/mapComponent';
import { checkForAuthentication, clearLocalStorage } from '../../auth/auth';
import { validURL } from '../../utils/utils';
import { useHistory } from 'react-router';
import SnackBar from '../../shared/entryComponents/Snackbars/snackBar';
import './appContainer.css';

const AppContainer = () => {

    const [inputIp , setInputIp] = useState('');
    const [ipInfos , setIpInfos] = useState({});
    const [coordinates , setCordinates] = useState([37.38605, -122.08385]);
    const [customSnackBarMessage , setCustomSnackBarMessage] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const history = useHistory();

    const logOut = ()=>{
        clearLocalStorage();
        history.push("/")
    }
    
    useEffect(()=>{

        if(!checkForAuthentication()){
            history.push("/");
        }

        if(validURL(inputIp)){            
            setIsLoading(true);
            fetchIpLocations(inputIp).then(res=>{
                setIsLoading(false);                
                if(res){
                    let data = res?.data;
                    setIpInfos({...data});
                    setCordinates([data?.location?.lat, data?.location?.lng])
                }
            }).catch(error=>{
                setIsLoading(false);
                if(error.response !== undefined && error.response.data.code === 400){
                    setCustomSnackBarMessage("OOPS ! It seems like this website or IP address doesn't exist.")
                }   
                if(error.response !== undefined && error.response.data.code === 403){
                    setCustomSnackBarMessage("OOPS ! It seems something went wrong.")
                }               
            })
        }

        else if(!validURL(inputIp) && inputIp !== ''){
            setCustomSnackBarMessage("The website address should of format 'example.com' or '.org'  etc.")
        }

    }, [inputIp])

	return (

        <div className="app-container">

            <div className="app-container__upper-body">
                <h1 className="upper-body__heading">
                    <span className="upper-body__logout" onClick={logOut}>Log Out</span> 
                    IP Address Tracker
                </h1>
                <IpInputSearch setInputIp={setInputIp}/>                
                {
                    isLoading ? (<DisplayDetailsModal ipInfos={ipInfos} isLoading={isLoading}/>) : 
                    (<DisplayDetailsModal ipInfos={ipInfos} isLoading={isLoading}/>)
                }
            </div>

            <div className="app-container__lower-body">
                <MapComponent ipInfos={ipInfos} coordinates={[...coordinates]} />
            </div>  

            <SnackBar message={customSnackBarMessage} setCustomSnackBarMessage={setCustomSnackBarMessage}></SnackBar>       
            
        </div>
	);
};

export default AppContainer;

