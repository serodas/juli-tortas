import { useState } from 'react';

const initialState = {
    images: [],
    description: '',
    showModal: false,
    toggleProductsList: false
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addState = (payload) => {
        setState(payload);
    };

    return {
        state,
        addState
    }
}

export default useInitialState;