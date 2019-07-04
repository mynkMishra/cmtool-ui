import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'

import {
    asyncSignup,
    asyncSignin
} from '../../action'

import {
    setLocalStorage,
    isLocalStorageEmpty,
    clearLocalStorage,
    getLocalStorage
} from '../../config/localStorage'

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "showLoginForm": true,
            "showSignupForm": false,
            "loginForm": {
                "email": {
                    "type": "text",
                    "placeholder": "abc@mail.com",
                    "label": "Email",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "password": {
                    "type": "password",
                    "placeholder": "",
                    "label": "Password",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
            },
            "signupForm": {
                "username": {
                    "type": "text",
                    "placeholder": "",
                    "label": "Username",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "firstName": {
                    "type": "text",
                    "placeholder": "",
                    "label": "First Name",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "lastname": {
                    "type": "text",
                    "placeholder": "",
                    "label": "Last name",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "email": {
                    "type": "text",
                    "placeholder": "abc@mail.com",
                    "label": "Email",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "mobileNo": {
                    "type": "text",
                    "placeholder": "9876543210",
                    "label": "Mobile no.",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "password": {
                    "type": "password",
                    "placeholder": "",
                    "label": "Password",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
                "confirmPassword": {
                    "type": "password",
                    "placeholder": "",
                    "label": "Confirm Password",
                    "value": "",
                    "validations": {
                        "isValid": true,
                        "required": true,
                    }
                },
            },

        }

    }

    prepareForm = (type) => {

        const inputs = []
        const formType = this.state[type]
        Object.keys(formType).forEach(key => {
            inputs.push(

                <div className="form-group validated" key={key}>

                    {formType[key].validations.isValid && formType[key].validations.validationFailMessage !== '' ?
                        <span className="form-text text-danger">{formType[key].validations.validationFailMessage}</span> : ""}

                    <label>{formType[key].validations.required && '*'}{formType[key].label}</label>
                    <div className="input-group">
                        <input
                            type={formType[key].type}
                            className={
                                !formType[key].validations.isValid ?
                                    "form-control is-invalid" : "form-control"
                            }
                            onBlur={() => {
                                if (formType[key].value === '') {
                                    formType[key].validations.isValid = false
                                } else {
                                    formType[key].validations.isValid = true
                                }

                                this.setState({ type: formType })
                            }}
                            placeholder={formType[key].placeholder}
                            value={formType[key].value}
                            onChange={(event) => this.onChange(type, key, event.target.value)}
                            aria-describedby="basic-addon1" />
                    </div>

                </div>
            )
        })

        return inputs;

    }

    showGoogleLogin = () => {
        return (
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                classNameName="btn col-md-5"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'} >
                Sign In With Google
                </GoogleLogin>
        )
    }

    responseGoogle = (responseData) => {
        console.log(responseData)
    }

    onChange = (type, key, value) => {
        const formType = this.state[type]
        formType[key].value = value
        this.setState({
            [type]: formType
        })
    }

    validateForm = (type) => {

        const formData = this.state[type]
        let isValid = true

        if (type === 'signupForm') {

            if (formData.username.value === '') {
                formData.username.validations.isValid = false
                isValid = false
            }

            if (formData.firstName.value === '') {
                formData.firstName.validations.isValid = false
                isValid = false
            }

            if (formData.lastname.value === '') {
                formData.lastname.validations.isValid = false
                isValid = false
            }

            if (formData.email.value === '') {
                formData.email.validations.isValid = false
                isValid = false
            } else {
                if (!/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(formData.email.value)) {
                    formData.email.validations.isValid = false
                    isValid = false
                }
            }

            if (formData.password.value === '') {
                formData.password.validations.isValid = false
                isValid = false
            }

            if (formData.mobileNo.value === '') {
                formData.mobileNo.validations.isValid = false
                isValid = false
            } else {
                if (formData.mobileNo.value.length !== 10) {
                    formData.mobileNo.validations.isValid = false
                    isValid = false
                }
            }

            if (formData.password.value !== formData.confirmPassword.value) {
                formData.confirmPassword.validations.isValid = false
                isValid = false
            }

            console.log(formData)

            this.setState({ signupForm: formData })

            return isValid
        }

        if (type === 'loginForm') {

            if (formData.email.value === '') {
                formData.email.validations.isValid = false
                formData.email.validations.validationFailMessage = 'Email required !!!'
                isValid = false
            } else {
                if (!/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(formData.email.value)) {
                    formData.email.validations.isValid = false
                    formData.email.validations.validationFailMessage = 'Invalid Email !!!'
                    isValid = false
                }
            }

            if (formData.password.value === '') {
                formData.password.validations.isValid = false
                formData.password.validations.validationFailMessage = 'Password required !!!'
                isValid = false
            }

            console.log(formData)

            this.setState({ loginForm: formData })

            return isValid
        }

    }

    onSubmit = async (type, event) => {
        event.preventDefault()

        if (type === 'loginForm') {
            if (this.validateForm(type)) {
                const formData = this.state[type]
                const data = {
                    email: formData.email.value,
                    password: formData.password.value
                }
                await this.props.dispatch(asyncSignin(data))

                if (this.props.authReducer.isSignin &&
                    this.props.authReducer.token !== null &&
                    Object.keys(this.props.authReducer.user).length > 0) {

                    Object.keys(formData).forEach(key => {
                        formData[key].value = ''
                    })
                    this.setState({ loginForm: formData })

                    this.prepareLocalStorage()
                }
            } else {
                console.log(this.state[type])
            }
        }



        if (type === 'signupForm') {

            if (this.validateForm(type)) {
                const formData = this.state[type]
                const data = {
                    email: formData.email.value,
                    userName: formData.username.value,
                    firstName: formData.firstName.value,
                    lastName: formData.lastname.value,
                    mobileNo: formData.mobileNo.value,
                    password: formData.password.value
                }
                this.props.dispatch(asyncSignup(data))

                if (this.props.authReducer.isSignup) {
                    Object.keys(formData).forEach(key => {
                        formData[key].value = ''
                    })
                    this.setState({ signupForm: formData })
                }

                console.log(this.props.authReducer)
            } else {
                console.log(this.state[type])
            }
        }
    }

    prepareLocalStorage = () => {

        if (Object.keys(this.props.authReducer.user).length > 0 &&
            this.props.authReducer.token !== null) {

            const storageObj = {}
            const token = this.props.authReducer.token.split(" ")[1]

            storageObj["_uuid"] = this.props.authReducer.user.uuid
            storageObj["_auth"] = token

            !isLocalStorageEmpty() && clearLocalStorage()

            Object.keys(storageObj).forEach(key => {
                setLocalStorage(key, JSON.stringify(storageObj[key]))
            })

        }

        if(getLocalStorage('_uuid') && getLocalStorage('_auth')){
            this.props.history.push({ pathname: '/summary' })
        }

    }

    renderSignupForm = () => {
        return (
            <div className="kt-portlet ">
                <div className="kt-portlet__head container">
                    <div className='row justify-content-between'>
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title">
                                Sign Up</h3>
                        </div>
                    </div>
                </div>
                {this.state.showSignupForm &&

                    <form className="kt-form kt-form--label-right">
                        <div className="kt-portlet__body">
                            {this.prepareForm("signupForm").map(input => input)}

                            {
                                !this.props.authReducer.signupLoading &&
                                this.props.authReducer.isSignup &&
                                this.props.authReducer.error === '' &&
                                <div className="alert alert-success" role="alert">
                                    <div className="alert-text">Registered Successfully</div>
                                </div>
                            }
                            {
                                !this.props.authReducer.signupLoading &&
                                this.props.authReducer.isSignup &&
                                this.props.authReducer.error !== '' &&
                                <div className="alert alert-danger" role="alert">
                                    <div className="alert-text">{this.props.authReducer.error}</div>
                                </div>
                            }
                            <div className="kt-form__actions container"
                                style={{
                                    marginTop: '3rem'
                                }}>
                                <div className="row justify-content-center">
                                    <button type="reset"
                                        className="btn btn-primary col-md-5"
                                        onClick={(event) => this.onSubmit("signupForm", event)}>Sign Up</button>
                                </div>
                            </div>
                            <div className="kt-form__actions container">
                                <div className="row justify-content-center">
                                    <span style={{
                                        padding: '0.6rem 0.3rem',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>Already have an account ?</span>
                                    <span onClick={() => this.setState({
                                        "showLoginForm": true,
                                        "showSignupForm": false
                                    })}
                                        className='btn'
                                        style={{
                                            padding: '0.5rem 0rem',
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            borderColor: 'transparent',
                                            background: 'transparent',
                                            color: '#80c3af',
                                            fontWeight: '700',
                                            cursor: 'pointer'
                                        }}>Sign In</span>
                                </div>
                            </div>
                        </div>
                    </form>
                }
            </div>
        )
    }

    renderLoginForm = () => {

        return (
            <div className="kt-portlet ">
                <div className="kt-portlet__head container">
                    <div className='row justify-content-between'>
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title">
                                Sign In</h3>
                        </div>
                    </div>
                </div>
                {this.state.showLoginForm &&

                    <form className="kt-form kt-form--label-right">
                        <div className="kt-portlet__body">
                            {this.prepareForm("loginForm").map(input => input)}

                            {
                                !this.props.authReducer.signinLoading &&
                                this.props.authReducer.signinLoading &&
                                this.props.authReducer.error !== '' &&
                                <div className="alert alert-danger" role="alert">
                                    <div className="alert-text">{this.props.authReducer.error}</div>
                                </div>
                            }
                            <div className="kt-form__actions container"
                                style={{
                                    marginTop: '3rem'
                                }}>
                                <div className="row justify-content-center">
                                    <button type="reset"
                                        className="btn btn-primary col-md-5"
                                        onClick={(event) =>
                                            this.onSubmit("loginForm", event)
                                        }>Sign In</button>
                                </div>
                            </div>
                            <div className="kt-form__actions container">
                                <div className="row justify-content-center">
                                    <span style={{
                                        padding: '0.6rem 0.3rem',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>Don't have an account ?</span>
                                    <span onClick={() => this.setState({
                                        "showLoginForm": false,
                                        "showSignupForm": true
                                    })}
                                        className='btn'
                                        style={{
                                            padding: '0.5rem 0rem',
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            borderColor: 'transparent',
                                            background: 'transparent',
                                            color: '#80c3af',
                                            fontWeight: '700',
                                            cursor: 'pointer'
                                        }}>Sign Up</span>
                                </div>
                            </div>
                        </div>
                        <div className="kt-portlet__foot">
                            <div className="kt-form__actions  container">
                                <div className="row justify-content-center">
                                    {this.showGoogleLogin()}
                                </div>
                            </div>
                        </div>
                    </form>
                }
            </div>
        )
    }


    render() {

       
            return (

                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
                    <div className="kt-body kt-body--fixed  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver" id="kt_body">
                        <div className="kt-content kt-grid__item kt-grid__item--fluid ">
                            <div className="row justify-content-center">
                                <div className="col-md-5 ">
                                    {
                                        this.state.showLoginForm && this.renderLoginForm()
                                    }
                                    {
                                        this.state.showSignupForm && this.renderSignupForm()
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(Auth)