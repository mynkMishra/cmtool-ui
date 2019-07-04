

import React, { Fragment } from 'react'
import {
    BrowserRouter as Router, Route, Redirect
} from 'react-router-dom'
import Loadable from 'react-loadable'

import { getLocalStorage } from '../config/localStorage'

const Header = Loadable({
    loader: () => import('../containers/Header/header.container'),
    loading: () => <div></div>
})

const Footer = Loadable({
    loader: () => import('../containers/Footer/footer.container'),
    loading: () => <div></div>

})

const getLoader = () => {
    return (<div>
        ...Loading
    </div>)
}

const Auth = Loadable({
    loader: () => import('../containers/Auth/auth.container'),
    loading: () => getLoader()
})

const Home = Loadable({
    loader: () => import('../containers/Home/home.container'),
    loading: () => getLoader()
})

const Summary = Loadable({
    loader: () => import('../containers/Summary/summary.container'),
    loading: () => getLoader()
})

const Profile = Loadable({
    loader: () => import('../containers/Profile/profile.container'),
    loading: () => getLoader()
})




export default (
    <Router>
        <div className="kt-grid kt-grid--hor kt-grid--root">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper">
                    <Route path="*" component={Header}></Route>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/auth' component={Auth}></Route>
                    <Route exact path='/summary' component={Summary}></Route>
                    <Route exact path='/profile' component={Profile}></Route>
                    <Route path="*" component={Footer}></Route>
                </div>
            </div>
        </div>
    </Router>
)