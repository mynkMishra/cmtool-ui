
import {
    SIGNUP_SUCCESS,
    SIGNUP_PENDING,
    SIGNUP_FAILED,
    DEFAULT_SIGNIN_SUCCESS,
    DEFAULT_SIGNIN_PENDING,
    DEFAULT_SIGNIN_FAILED
} from '../../config/reducer.constants'

export const signupSuccess = ()=>{
    return {
        type : SIGNUP_SUCCESS
    }
}

export const signupPending = ()=>{
    return {
        type : SIGNUP_PENDING
    }
}

export const signupFailed = (error)=>{
    return {
        type : SIGNUP_FAILED,
        error
    }
}

export const defaultSigninSuccess = (data)=>{
    return {
        type : DEFAULT_SIGNIN_SUCCESS,
        data

    }
}

export const defaultSigninPending = () =>{
    return{
        type : DEFAULT_SIGNIN_PENDING
    }

}

export const defaultSigninFailed = (error)=>{
    return{
        type : DEFAULT_SIGNIN_FAILED,
        error
    }
}