import React from 'react';
import logo from '@logos/logo-mini.png';
import '@styles/header.scss';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><a href="/">INICIO</a></li>
                    <li><a href="/tortas">TORTAS</a></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;