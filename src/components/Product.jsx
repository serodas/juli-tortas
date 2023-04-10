import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/product.scss';

const Product = ({product}) => {

    const { addState } = useContext(AppContext);

    const handleClick = (product) => {
        const newState = {
            images: product.images,
            description: product.description,
            showModal: true,
            toggleProductsList: true
        }
        addState(newState);
    };

    return (
        <div className='product-container' onClick={() => handleClick(product)}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
        </div>
    );
}

export default Product;