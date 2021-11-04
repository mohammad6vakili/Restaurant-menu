export const USER_MOBILE="USER_MOBILE";
export const LOGIN_CODE="LOGIN_CODE";
export const USER_STATUS="USER_STATUS";


export const setUserMobile=(data)=>{
    return(
        {
            type:USER_MOBILE,
            payload:data
        }
    )
}
export const setLoginCode=(data)=>{
    return(
        {
            type:LOGIN_CODE,
            payload:data
        }
    )
}
export const setUserStatus=(data)=>{
    return(
        {
            type:USER_STATUS,
            payload:data
        }
    )
}