import React from 'react';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import MainContent from '../components/MainContent';
import SideContent from '../components/SideContent';
import '@styles/home.scss';

const Home = () => {
    return (
        <>
            <SideContent />
            <MainContent />
            <Footer />
            <Loader />
        </>
    );
}

export default Home;