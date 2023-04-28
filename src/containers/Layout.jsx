import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
    return (
        <section className="container">
            <Header />
            {children}
        </section>
    );
}

export default Layout;