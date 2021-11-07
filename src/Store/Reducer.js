import {
FOODS_DATA
} from "./Action";
  
  const initialState = {
    foodsData:null
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FOODS_DATA:
        return {...state , foodsData: action.payload};
      default:
        return state;
    }
  };
  export default Reducer;