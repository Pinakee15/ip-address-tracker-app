import React , {useState , useEffect} from 'react';
import IpInputSearch from '../../components/IpInputSearch/ipInputSearch';
import { fetchIpLocations } from '../../services/ip-location.service';
import DisplayDetailsModal from '../../shared/entryComponents/Modals/displayDetailsModal/displayDetailsModal';
import MapComponent from '../../components/mapComponent/mapComponent';
import { checkForAuthentication, clearLocalStorage, getUserId } from '../../auth/auth';
import { validURL } from '../../utils/utils';
import { useHistory } from 'react-router';
import SnackBar from '../../shared/entryComponents/Snackbars/snackBar';
import './appContainer.css';
import {appService} from '../../services/app.service';
import { dummyIpData } from '../../assets/dummy-data/dummy-data';
import HistoryModal from '../../shared/entryComponents/Modals/historyModal/historyModal';


const AppContainer = () => {

    const [inputIp , setInputIp] = useState('');
    const [ipInfos , setIpInfos] = useState({});
    const [coordinates , setCordinates] = useState([37.38605, -122.08385]);
    const [customSnackBarMessage , setCustomSnackBarMessage] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const [userSearchHistory , setUserSearchHistory] = useState([]);
    const [showHistoryModal , setShowHistoryModal] = useState(false);
    const history = useHistory();

    const logOut = ()=>{
        clearLocalStorage();
        history.push("/")
    }

    const fetchHistory=()=>{
        const userId = getUserId();
        appService.fetchUserIpDetails(userId).then(histories=>{
            console.log("histories : ", histories?.data?.data)
            setUserSearchHistory(histories?.data?.data);
            setShowHistoryModal(true);
        })
        return;
    }
    
    useEffect(()=>{

        if(!checkForAuthentication()){
            history.push("/");
        }

        if(validURL(inputIp)){            
            setIsLoading(true);

            // // temp start
            // postIpDetails(dummyIpData);
            // setIsLoading(false);
            // // temp end

            // FETCHING THE IP DETAILS FORM IPIFY
            fetchIpLocations(inputIp).then(res=>{
                setIsLoading(false);                
                if(res){
                    let data = res?.data;
                    setIpInfos({...data});
                    setCordinates([data?.location?.lat, data?.location?.lng]);

                    // POSTING THE IP DETAILS IN THE BACKEND
                    // GET THE USER ID
                    const userId = getUserId();
                    // appService.postIpDetails(res?.data , userId);
                    appService.fetchUserIpDetails(userId);
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
                    <span className="upper-body__search" onClick={fetchHistory}>Search history</span>
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

            {showHistoryModal ? <HistoryModal 
                userSearchHistory={userSearchHistory}
                setShowHistoryModal={setShowHistoryModal} /> 
            : null} 
        </div>
	);
};

export default AppContainer;

