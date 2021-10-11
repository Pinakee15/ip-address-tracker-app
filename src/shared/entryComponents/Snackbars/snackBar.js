import React , {useState , useEffect} from 'react';
import "./snackBar.css";

const SnackBar = ({message , setCustomSnackBarMessage}) => {
    //// Store the coordinates . 

    useEffect(() => {     
        console.log("entered ...||| ")
        setTimeout(()=>{
            setCustomSnackBarMessage('');
        }, 2700)
	}, [message]);
    
    return (        
        <div className="snackbar-container" style={{display : message ? 'flex' : 'none'}}>
            <div className="snackbar">
                {message} 
            </div>
        </div>
    )
}

export default SnackBar;
