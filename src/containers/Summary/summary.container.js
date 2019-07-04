import React, { Component } from 'react'
import {
    getLocalStorage
} from '../../config/localStorage'

import { connect } from 'react-redux'

class Summary extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount(){
        if( !(getLocalStorage("_uuid") && getLocalStorage("_auth"))){
            this.props.history.push({pathname : '/auth'})
        }
    }

    componentDidMount(){
        console.log("This is Summary Page")
        console.log(getLocalStorage("_uuid"))
        console.log(this.props.authReducer)
    }

    render() {

        return (
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
                <div className="kt-body kt-body--fixed  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver" id="kt_body">
                    <div className="kt-content kt-grid__item kt-grid__item--fluid ">
                        <div className="row justify-content-center">
                        <h1>This is Summary Page</h1>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch
    }
}
export default connect((state) => state, mapDispatchToProps)(Summary)