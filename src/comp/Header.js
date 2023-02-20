import React from "react"
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

class Header extends React.Component{
    render(){
        return(
            <div className="fixed-top bg-dark col-lg-2">
                <div className="container vh-100 text-center mt-3">
                    <div>
                        <img className="img-fluid logo-page" src="./image/logo.png" alt="my logo"/>
                    </div>
                    <div className="container">
                        <div className="container list text-center">
                            <a className="list-pc" href="./index.html">Home</a>
                            <a className="list-pc" href="#Education">Education</a>
                            <a className="list-pc" href="#Project">Project</a>
                            <a className="list-pc" href="#Skills">Skills</a>
                            <a className="list-pc" target="_blank" href="/">Download CV</a>
                            <div className="dropdown list-mobile">
                                <button type="button" className="btn btn-secodary dropdown-toggle" data-bs-toggle="dropdown">
                                    Pages
                                </button>
                                <ul className="dropdown-menu bg-light text-center">
                                    <li><a className="dropdown-item" href="./index.html">Home</a></li>
                                    <li><a className="dropdown-item" href="#Education">Education</a></li>
                                    <li><a className="dropdown-item" href="#Project">Project</a></li>
                                    <li><a className="dropdown-item" href="#Skills">Skills</a></li>
                                    <li><a className="dropdown-item" href="#cv">My cv</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="col-lg-2 fixed-bottom justify-content-center">
                            <div className="container icon-style m-2">
                                <a href="/" target="_blank"><FaFacebookSquare className="text-light fs-4 m-1"  /></a>
                                <a href="/" target="_blank"><FaLinkedin className="text-light fs-4 m-1" /></a>
                                <a href="/" target="_blank"><FaTwitterSquare className="text-light fs-4 m-1" /></a>
                            </div>
                            <p>Phone : +962-776830893 <br/>mhamd.naser.edden@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;