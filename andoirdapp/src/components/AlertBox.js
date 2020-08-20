import React from 'react';
import {connect} from 'react-redux';
import {Text, Badge} from 'native-base';

const AlertBox = (props) => {
  if (props.alerts !== null && props.alerts.length > 0) {
    return (
      <>
        {props.alerts.map((alert) => (
          <Badge key={alert.id} info rounded>
            <Text>{alert.msg}</Text>
          </Badge>
        ))}
      </>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer.alerts,
});

export default connect(mapStateToProps)(AlertBox);
