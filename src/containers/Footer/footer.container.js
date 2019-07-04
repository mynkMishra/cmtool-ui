import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export const Footer = (props)=>{

    return (
        <div className="kt-footer kt-grid__item " id="kt_footer">
	<div className="kt-footer__copyright">
        2018&nbsp;&copy;&nbsp;
        <Link to={{pathname : '/'}}  rel='nofollow' className="kt-link">Lawtendo Alliances LLP</Link>
	</div>
	<div className="kt-footer__menu">
		<Link to={{pathname : "/about"}}  rel='nofollow' className="kt-link">About</Link>
		<Link to={{pathname : "/service"}}  rel='nofollow' className="kt-link">Services</Link>
		<Link to={{pathname :"/contact"}}  rel='nofollow' className="kt-link">Contact</Link>
	</div>
</div>
    )
}

export default Footer