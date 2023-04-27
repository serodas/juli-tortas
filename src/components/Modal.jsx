import { createPortal } from 'react-dom';

import '@styles/modal.scss';

const Modal = ({ children }) => {
    return createPortal(
        children,
        document.getElementById('modal')
    );
}

export default Modal;