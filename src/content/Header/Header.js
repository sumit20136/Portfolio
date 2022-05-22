import React from 'react';
import './Header.css'
import { Link, animateScroll as scroll } from 'react-scroll'
export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark px-3" id='Header'>
                <div className="navbar-brand" >PortFolio</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="Header" smooth={true} duration={100} style={{ cursor: "pointer " }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="AboutMe" smooth={true} duration={100} style={{ cursor: "pointer " }}>AboutMe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ContactMe" smooth={true} duration={100} style={{ cursor: "pointer " }}>ContactMe</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}