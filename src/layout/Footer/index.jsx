import React from 'react';
import logo from "../../../public/images/logo.png";
import './style.css'

export function Footer() {
    return (
        <footer>
            <div id="footer-div">
                <img className="footer-img" src={logo} alt="GitHub logo" />
            </div>
        </footer>
    )
}
