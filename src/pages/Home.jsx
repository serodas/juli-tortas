import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import MainContent from '../components/MainContent';
import Modal from '../components/Modal';
import SideContent from '../components/SideContent';
import ProductsList from '../components/ProductsList';
import AppContext from '../context/AppContext';
import '@styles/home.scss';

const Home = () => {
    const { state } = useContext(AppContext);
    return (
        <div>
            <section className='container'>
                <Header />
                {  state.toggleProductsList &&  <ProductsList /> }
                { ! state.toggleProductsList &&  <SideContent />}
                { ! state.toggleProductsList &&  <MainContent />}
                { ! state.toggleProductsList &&  <Footer />}
            </section>
            <Loader />
            <Modal/>
        </div>
    );
}

export default Home;