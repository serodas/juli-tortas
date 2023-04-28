import React from 'react';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import ProductsList from '../pages/ProductsList';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tortas" element={<ProductsList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </AppContext.Provider>
    );
};

export default App;