import React, { FC } from "react";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";
import { Alert as AlertType } from "redux/types";
import { RootState } from "redux/reducers";

type Props = {
  alerts: AlertType[];
};

function getColor(alertType: String) {
  let alertColor = "blue";
  if (alertType === "danger") {
    alertColor = "red";
  } else if (alertType === "warning") {
    alertColor = "grey";
  } else {
    alertColor = "green";
  }
  return alertColor;
}

export const AlertBox: FC<Props> = (props) => {
  if (props.alerts !== null && props.alerts.length > 0) {
    return (
      <>
        {props.alerts.map((alert) => (
          <Toast key={alert.id}>
            <Toast.Header>
              <strong className="mr-auto">Notification </strong>
            </Toast.Header>
            <Toast.Body
              style={{
                fontWeight: "bold",
                color: getColor(alert.alertType),
              }}
            >
              {alert.msg}
            </Toast.Body>
          </Toast>
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
