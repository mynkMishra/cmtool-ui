
import {

    SIGNUP_SUCCESS,
    SIGNUP_PENDING,
    SIGNUP_FAILED,

    DEFAULT_SIGNIN_SUCCESS,
    DEFAULT_SIGNIN_PENDING,
    DEFAULT_SIGNIN_FAILED,

    GOOGLE_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_PENDING,
    GOOGLE_SIGNIN_FAILED
} from '../../config/reducer.constants'


const initialState = {
    isSignin : false,
    isSignup : false,
    signinLoading : false,
    googleLoading : false,
    signupLoading : false,
    token : null,
    user : {},
    error : ''

}

export const authReducer = (state = initialState, action)=>{

    switch(action.type){

        case SIGNUP_SUCCESS :
            return {
                ...state,
                signupLoading : false,
                isSignup : true
            }

        case SIGNUP_PENDING :
            return {
                ...state,
                signupLoading : true,
                isSignup : false
            }

        case SIGNUP_FAILED :
                return {
                    ...state,
                    signupLoading : false,
                    isSignup : false,
                    error : action.error
                }

        case DEFAULT_SIGNIN_SUCCESS : 
                return {
                    ...state,
                    signinLoading : false,
                    isSignin : true,
                    user : action.data.data,
                    token : action.data.token
                }

        case DEFAULT_SIGNIN_FAILED :
            return {
                ...state,
                signinLoading : false,
                isSignin : false,
                error : action.data.error
            }

        case DEFAULT_SIGNIN_PENDING :
            return {
                ...state,
                signinLoading : true,
                isSignin : false
            }

        case GOOGLE_SIGNIN_SUCCESS :

        case GOOGLE_SIGNIN_FAILED :

        case GOOGLE_SIGNIN_PENDING :

        default :
                return {
                    ...state
                }

    }
}