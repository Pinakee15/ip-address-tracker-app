import React, { useEffect } from 'react'
import Sawo from 'sawo'

const LoginComponent = () => {
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'phone_number_sms',
            // Add the API key copied from 5th step
            apiKey: '06e99332-df38-4456-abf7-59fe16f3229a',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
                console.log("THIS IS THE SAWO PAYLOAD : ", payload);
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div className="container">
            <div id="sawo-container" style={{ height: '300px', width: '315px', borderRadius: '50px' }}></div>
        </div>
    )
}

export default LoginComponent