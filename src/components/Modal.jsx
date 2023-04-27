import React, { useContext } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

import AppContext from '../context/AppContext';
import '@styles/modal.scss';

const Modal = ({ children }) => {
    return createPortal(
        children,
        document.getElementById('modal')
    );
    // const { state, addState } = useContext(AppContext);
    // const images = state.images;
    // const description = state.description;
    // const modal = state.showModal ? 'modal' : 'modal hidden';

    // const handleClick = () => {
    //     addState({
    //         ...state,
    //         images: [],
    //         description: '',
    //         showModal: false
    //     });
    // };

    // return (

    // );
}

export default Modal;