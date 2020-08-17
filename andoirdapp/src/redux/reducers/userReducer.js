import AsyncStorage from '@react-native-community/async-storage';

const defaultState = {
  loadded: false,
  loggedIn: false,
  user: {
    username: '',
  },
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loadded: true,
        loggedIn: true,
        user: {...action.payload},
      };
    case 'LOG_OUT':
      AsyncStorage.clear();
      return {
        loadded: true,
        loggedIn: false,
        user: defaultState.user,
      };
    case 'AUTO_LOGIN':
      return {
        ...state,
        loadded: true,
      };
    default:
      return state;
  }
};

export default userReducer;
