import React, { useContext } from 'react';
import Product from './Product';
import productsAll from '../utils/productsAll';
import '@styles/productsList.scss';
import AppContext from '../context/AppContext';
import Modal from './Modal';
import Slider from './Slider';

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