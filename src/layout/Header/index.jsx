import React from 'react';
import './style.css';
import logo from "../../../public/images/logo.png";

import { Form } from '../../components';

export function Header() {
    return (
        <header>
            <img className="header-img" src={logo} alt="GitHub logo" />
                <Form />
        </header>
    )
}
