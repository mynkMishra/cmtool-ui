import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    showBrandLogo = () => {
        return (
            <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
                <Link to={{pathname : '/'}}>
                    <img alt="Logo" src="./assets/media/logos/logo-1.png" />
                </Link>
            </div>
        )
    }

    showDefaultHeader = ()=>{
        return (
            <div id="kt_header" className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed ">
                {this.showBrandLogo()}
                <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                    <i className="la la-close"></i>
                </button>
                <div className="kt-header-menu-wrapper kt-grid__item" id="kt_header_menu_wrapper">
                    <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
                        <ul className="kt-menu__nav ">
                            <li className="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel kt-menu__item--open kt-menu__item--here" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Home</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Blogs</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}}  className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Services</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                    <div className="kt-header__topbar-item kt-header__topbar-item--user" id="kt_offcanvas_toolbar_profile_toggler_btn">
                        <Link to={{ pathname: '/auth' }} className="btn btn-default btn-sm btn-bold btn-upper">Sign In</Link>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        /**
         * if loggedin show different header, else default header
         */

        return (
            <div id="kt_header" className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed ">
                {this.showBrandLogo()}
                <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                    <i className="la la-close"></i>
                </button>
                <div className="kt-header-menu-wrapper kt-grid__item" id="kt_header_menu_wrapper">
                    <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
                        <ul className="kt-menu__nav ">
                            <li className="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel kt-menu__item--open kt-menu__item--here" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Home</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Blogs</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}}  className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Services</span>
                                </Link>
                            </li>
                            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                <Link to={{pathname : '/'}} className="kt-menu__link kt-menu__toggle">
                                    <span className="kt-menu__link-text">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid container ">
                    <div className='row align-items-center'>
                    <div className="kt-header__topbar-item kt-header__topbar-item--user " id="kt_offcanvas_toolbar_profile_toggler_btn">
                    <Link to={{ pathname: '/auth' }} className="btn btn-success btn-font-lg">Sign In</Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header