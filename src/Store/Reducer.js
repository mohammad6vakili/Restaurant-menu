import {
FOODS_DATA,
FOOD_DATA
} from "./Action";
  
  const initialState = {
    foodsData:null,
    foodData:null
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FOODS_DATA:
        return {...state , foodsData: action.payload};
      case FOOD_DATA:
        return {...state , foodData: action.payload};
      default:
        return state;
    }
  };
  export default Reducer;