import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/footer.scss';
import productsListFooter from '../utils/productsListFooter';

const Footer = () => {
    const { addState } = useContext(AppContext);

    const handleClick = (product) => {
        const newState = {
            images: product.images,
            description: product.description,
            showModal: true
        }
        addState(newState);
    };

    return (
        <footer className="footer">
            {productsListFooter.map(product => (
                <div onClick={() => handleClick(product)} key={`product-${product.id}`}>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </footer>
    );
}

export default Footer;