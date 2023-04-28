import { useState } from 'react';

const initialState = {
    images: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [openModal, setOpenModal] = useState(false);
    const [toggleProductList, setToggleProductList] = useState(false);

    const addState = (payload) => {
        setState(payload);
    };

    return {
        state,
        addState,
        openModal,
        setOpenModal,
        toggleProductList,
        setToggleProductList
    }
}

export default useInitialState;