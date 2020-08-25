import React, { FC } from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { Alert as AlertType } from "redux/types";
import { RootState } from "redux/reducers";

type Props = {
  alerts: AlertType[];
};

const AlertBox: FC<Props> = (props) => {
  if (props.alerts !== null && props.alerts.length > 0) {
    return (
      <>
        {props.alerts.map((alert) => (
          <Alert key={alert.id} variant={alert.alertType}>
            {alert.msg}
          </Alert>
        ))}
      </>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: RootState) => ({
  alerts: state.alertReducer.alerts,
});

export default connect(mapStateToProps)(AlertBox);
