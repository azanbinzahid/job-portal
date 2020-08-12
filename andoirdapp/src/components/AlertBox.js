import React from 'react'
import {connect} from 'react-redux';
import { Alert } from 'react-bootstrap';


const AlertBox = (props) => {

   
    if(props.alerts !==null && props.alerts.length>0){
        return(
            <>
            {
                props.alerts.map(alert=>(
                        <Alert key={alert.id} variant={alert.alertType}>
                            {alert.msg}
                        </Alert>
                    ))
            }
            </>
        )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    alerts: state.alertReducer.alerts
  });

export default connect(mapStateToProps)(AlertBox);