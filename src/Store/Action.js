export const FOODS_DATA="FOODS_DATA";


export const setFoodsData=(data)=>{
    return(
        {
            type:FOODS_DATA,
            payload:data
        }
    )
}