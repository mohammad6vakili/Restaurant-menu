import {
    USER_MOBILE,
    LOGIN_CODE,
    USER_STATUS
} from "./Action";
  
  const initialState = {
    userMobile:"",
    loginCode:"",
    userStatus:null
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_MOBILE:
        return { ...state, userMobile: action.payload };
      case LOGIN_CODE:
        return { ...state, loginCode: action.payload };
      case USER_STATUS:
        return {...state , userStatus: action.payload};
      default:
        return state;
    }
  };
  export default Reducer;