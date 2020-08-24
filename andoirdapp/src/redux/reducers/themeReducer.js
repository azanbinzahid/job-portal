import material from '../../../native-base-theme/variables/material';

const defaultState = {
  headerColor: material.brandPrimary,
};

function toggle(v) {
  let color1 = material.brandPrimary;
  let color2 = 'black';
  return v === color1 ? color2 : color1;
}

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        headerColor: toggle(state.headerColor),
      };
    default:
      return state;
  }
};

export default themeReducer;
