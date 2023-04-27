import React, { useContext } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

import AppContext from '../context/AppContext';
import '@styles/modal.scss';

const Modal = ({ children }) => {
    return createPortal(
        children,
        document.getElementById('modal')
    );
}

export default Modal;