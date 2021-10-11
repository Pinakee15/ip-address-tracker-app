import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Sawo from 'sawo'
import { checkForAuthentication, storeUserId } from '../../auth/auth';
import './loginComponent.css';


const {REACT_APP_SAWO_API_KEY} = process.env;

const LoginComponent = () => {
    
    const [authenticationFlag , setAuthenticationFlag] = useState(false);
    const history = useHistory();

    useEffect(() => {

        // CHECK IF USER IS ALREADY LOGGED IN ?
        if(checkForAuthentication()){
            history.push("/app");
        }

        var config = {
            containerID: 'sawo-container',
            identifierType: 'phone_number_sms',
            apiKey: REACT_APP_SAWO_API_KEY,        
            onSuccess: payload => {                
                if(payload?.user_id){
                    storeUserId(payload?.user_id);
                    setAuthenticationFlag(true);
                }
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [authenticationFlag])

    return (
        <div className="container">
            <div className="container__login-box">
                <div id="sawo-container" 
                    style={{ height: '340px',  width: '320px',
                    borderRadius: '50px'}}>
                </div>
            </div>
            <h1 className="container-header">Please login to access the app !</h1>
        </div>
    )
}

export default LoginComponent