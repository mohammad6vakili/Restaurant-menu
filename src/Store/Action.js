export const FOODS_DATA="FOODS_DATA";
export const FOOD_DATA="FOOD_DATA";
export const CART="CART";
export const CART_DATA="CART_DATA";
export const RES="RES";
export const CAT="CAT";
export const FOODS="FOODS";


export const setFoodsData=(data)=>{
    return(
        {
            type:FOODS_DATA,
            payload:data
        }
    )
}
export const setFoodData=(data)=>{
    return(
        {
            type:FOOD_DATA,
            payload:data
        }
    )
}
export const setCart=(data)=>{
    return(
        {
            type:CART,
            payload:data
        }
    )
}
export const setCartData=(data)=>{
    return(
        {
            type:CART_DATA,
            payload:data
        }
    )
}
export const setRes=(data)=>{
    return(
        {
            type:RES,
            payload:data
        }
    )
}
export const setCat=(data)=>{
    return(
        {
            type:CAT,
            payload:data
        }
    )
}
export const setFoods=(data)=>{
    return(
        {
            type:FOODS,
            payload:data
        }
    )
}