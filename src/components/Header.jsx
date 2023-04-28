import React, { useContext } from 'react';
import logo from '@logos/logo-mini.png';
import AppContext from '../context/AppContext';
import '@styles/header.scss';

const Header = () => {
    const { setToggleProductList } = useContext(AppContext);
    const handleClick = () => {
        setToggleProductList(prevState => !prevState);
    };
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><a href="/">INICIO</a></li>
                    <li><a href="#" onClick={handleClick}>TORTAS</a></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;