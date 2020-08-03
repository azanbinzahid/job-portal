import React from 'react'
import {useSelector} from 'react-redux';
import { Alert } from 'react-bootstrap';


const AlertBox = () => {

    const alertReducer = useSelector(state => state.alertReducer)
    const alerts = alertReducer.alerts
   
    if(alerts !==null && alerts.length>0){
        let alertsList;
        alertsList = alerts.map((alert)=>{
            return(
                <Alert key={alert.id} variant={alert.alertType}>
                    {alert.msg}
                </Alert>
            )
        });

        return alertsList;
    } else {
        return null
    }
}

export default AlertBox;