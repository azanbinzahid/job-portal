import { AlertState, AlertActions, AlertActionTypes } from "redux/types";

const defaultState: AlertState = {
  alerts: [],
};

const alertReducer = (
  state = defaultState,
  action: AlertActions
): AlertState => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case AlertActionTypes.REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };

    default:
      return state;
  }
};

export default alertReducer;
