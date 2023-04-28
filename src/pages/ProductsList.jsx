import React, { useContext, useEffect } from 'react';
import Product from '../components/Product';
import productsAll from '../utils/productsAll';
import AppContext from '../context/AppContext';
import Modal from '../components/Modal';
import Slider from '../components/Slider';

import '@styles/productsList.scss';

const ProductsList = () => {
    const { openModal, setOpenModal } = useContext(AppContext);


    return (
        <>
            <div className='products-list-container'>
                {productsAll.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
            {openModal && (
                <Modal>
                    <Slider setOpenModal={setOpenModal} />
                </Modal>
            )}
        </>
    )
}

export default ProductsList;