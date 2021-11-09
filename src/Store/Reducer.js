import {
FOODS_DATA,
FOOD_DATA,
CART,
CART_DATA,
} from "./Action";
  
  const initialState = {
    foodsData:null,
    foodData:null,
    cart:false,
    cartData:[],
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FOODS_DATA:
        return {...state , foodsData: action.payload};
      case FOOD_DATA:
        return {...state , foodData: action.payload};
      case CART:
        return {...state , cart: action.payload};
      case CART_DATA:
        return {...state , cartData: action.payload};
      default:
        return state;
    }
  };
  export default Reducer;