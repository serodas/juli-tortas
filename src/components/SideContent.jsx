import React from 'react';
import logo from '@logos/logo-juli.png';
import '@styles/sideContent.scss'

const SideContent = () => {
    return (
        <aside className="side-content">
            {/* <p>Marchelina</p> */}
            <img src={logo} alt="logo-juli" />
            <div></div>
        </aside>
    );
}

export default SideContent;