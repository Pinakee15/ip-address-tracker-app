import React , {useState , useEffect} from 'react';
import "./historyModal.css";

const HistoryModal = ({userSearchHistory , setShowHistoryModal}) => {
    //// Store the coordinates . 

    console.log("HISTORY we get : ", userSearchHistory);
    const hideModal = ()=>{
        setShowHistoryModal(false);
    }
    
    return (        
        <div className="history-modal-container">
            <div className="history-modal">
                <h2 className="history-modal__heading">Search history</h2>
                <div className="history-modal__body">
                    {userSearchHistory ? userSearchHistory?.map(history=>{
                        return (
                            <div className="history-modal__body-block">IP :  {history?.ip} |  REGION : {history?.region} | COUNTRY : {history?.country} | ISP : {history?.isp} | COORDINATES : {history?.coordinates?.lat} , {history?.coordinates?.lng} </div>                            
                        )
                    })
                        : "You currently have no search history"
                    }
                </div>
            </div>
            <div onClick={hideModal}
                className="cross-history-modal">
                &#215;
            </div>
        </div>
    )
}

export default HistoryModal;
