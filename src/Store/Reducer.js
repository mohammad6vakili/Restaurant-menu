import {
FOODS_DATA,
FOOD_DATA,
CART,
CART_DATA,
RES,
CAT,
FOODS,
LANG
} from "./Action";
  
  const initialState = {
    foodsData:null,
    foodData:null,
    cart:false,
    cartData:[],
    res:null,
    cat:null,
    foods:null,
    lang:"ar"
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
      case RES:
        return {...state , res: action.payload};
      case CAT:
        return {...state , cat: action.payload};
      case FOODS:
        return {...state , foods: action.payload};
      case LANG:
        return {...state , lang: action.payload};
      default:
        return state;
    }
  };
  export default Reducer;