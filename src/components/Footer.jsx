import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/footer.scss';
import productsListFooter from '../utils/productsListFooter';
import Slider from './Slider';
import Modal from './Modal';

const Footer = () => {
    const { openModal, setOpenModal, addState } = useContext(AppContext);

    const handleClick = (product) => {
        const newState = {
            images: product.images,
        }
        addState(newState);
        setOpenModal(true);
    };

    return (
        <>
            <footer className="footer">
                {productsListFooter.map(product => (
                    <div onClick={() => handleClick(product)} key={`product-${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </div>
                ))}
            </footer>
            {openModal && (
                <Modal>
                    <Slider setOpenModal={setOpenModal} />
                </Modal>
            )}
        </>
    );
}

export default Footer;