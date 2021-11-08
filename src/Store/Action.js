export const FOODS_DATA="FOODS_DATA";
export const FOOD_DATA="FOOD_DATA";


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