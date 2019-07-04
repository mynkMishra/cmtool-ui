
import {
    GET_API_CALL, POST_API_CALL
} from '../../config/apiCall'

import {
    signupSuccess,
    signupFailed,
    signupPending,
    defaultSigninSuccess,
    defaultSigninFailed,
    defaultSigninPending
} from '../action/auth.action'

import {
    SIGNUP_URL,
    LOGIN_URL
} from '../../config/apiURL'


export const asyncSignup = (data)=>{
    return (dispatch) => {
        dispatch(signupPending())
        return POST_API_CALL(
            SIGNUP_URL, 
            null, 
            JSON.stringify(data))
        .then((headers, status, data) => {
            if(data.data !== null){
                console.log("SUCCESS")
                dispatch(signupSuccess())
                return Promise.resolve(true)
            }else{
                console.log("NULL")
                dispatch(signupFailed("Unable To Register"))
                return Promise.reject(false)
            }
        })
        .catch(error => {
            console.log("ERROR")
            dispatch(signupFailed(error))
            return Promise.reject(false)
        })
    }
}

export const asyncSignin = (data)=>{
    return (dispatch) => {
        dispatch(defaultSigninPending())
        return POST_API_CALL(
            LOGIN_URL, 
            null, 
            JSON.stringify(data))
        .then(({headers, status, data})=>{
            if(data != null && status === 200){
                console.log("SUCCESS")
                dispatch(defaultSigninSuccess({
                    token : headers,
                    data : data.data
                }))
                return Promise.resolve(true)
            }else{
                console.log("NULL")
                dispatch(defaultSigninFailed("Unable To Login"))
                return Promise.reject(false)
            }
        })
        .catch((error)=>{
            console.log("ERROR")
            console.log(error)
            dispatch(signupFailed("Unable To Login"))
            return Promise.reject(false)
        })
    }

}