import React from 'react';
import logo from '@logos/logo-mini.png';
import '@styles/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tortas">Tortas</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;