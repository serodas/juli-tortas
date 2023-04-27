import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

import '@styles/slider.scss';

const Slider = (props) => {
    const { state } = useContext(AppContext);

    const handleClick = () => {
        props.setOpenModal(false);
    }

    return (
        <section className='modal'>
            <div className="modal-content">
                <img
                    className="modal-content__close"
                    src="https://img.icons8.com/windows/32/000000/macos-close.png"
                    alt="ícono de cerrar"
                    onClick={handleClick}
                />
                <section className="slider">
                    {state.images.map((image) => (
                        <img src={image.image} key={image.id} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Slider;
