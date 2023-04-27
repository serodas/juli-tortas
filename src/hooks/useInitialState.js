import { useState } from 'react';

const initialState = {
    images: [],
    toggleProductsList: false
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [openModal, setOpenModal] = useState(false);

    const addState = (payload) => {
        setState(payload);
    };

    return {
        state,
        addState,
        openModal,
        setOpenModal
    }
}

export default useInitialState;