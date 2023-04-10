import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/modal.scss';

const Modal = () => {
    const { state, addState } = useContext(AppContext);
    const images = state.images;
    const description = state.description;
    const modal = state.showModal ? 'modal' : 'modal hidden';

    const handleClick = () => {
        addState({
            ...state,
            images: [],
            description: '',
            showModal: false
        });
    };

    return (
        <section className={modal}>
            <div className="modal-content">
                <img
                    className="modal-content__close"
                    src="https://img.icons8.com/windows/32/000000/macos-close.png"
                    alt="ícono de cerrar"
                    onClick={handleClick}
                />
                <section className="slider">
                    {images.map((image) => (
                        <img src={image.image} key={image.id}/>
                    ))}
                </section>
                <div className='description'>{description}</div>
            </div>
        </section>
    );
}

export default Modal;