import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import MainContent from '../components/MainContent';
import SideContent from '../components/SideContent';
import AppContext from '../context/AppContext';
import '@styles/home.scss';
import ProductsList from './ProductsList';

const Home = () => {
    const { toggleProductList } = useContext(AppContext);

    return (
        <>
            {!toggleProductList && (
                <>
                    <SideContent />
                    <MainContent />
                    <Footer />
                    <Loader />
                </>
            )}

            {toggleProductList && <ProductsList />}
        </>
    );
}

export default Home;