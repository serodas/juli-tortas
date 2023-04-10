import React from 'react';
import Product from './Product';
import productsAll from '../utils/productsAll';
import '@styles/productsList.scss';

const ProductsList = () => {
    return (
        <div className='products-list-container'>
            {productsAll.map(product => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default ProductsList;