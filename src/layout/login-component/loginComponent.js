import React, { useEffect } from 'react';
import Sawo from 'sawo'
import './loginComponent.css'

const LoginComponent = () => {
    useEffect(() => {
        var config = {
            containerID: 'sawo-container',
            identifierType: 'phone_number_sms',
            apiKey: '06e99332-df38-4456-abf7-59fe16f3229a',        
            onSuccess: payload => {                
                console.log("THIS IS THE SAWO PAYLOAD : ", payload);
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

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