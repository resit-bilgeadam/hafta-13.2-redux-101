import {createStore} from 'redux';
import { INCREMENT, DECREMENT, RESET, CHANGE } from './types';

const INITIAL_STATE = {
    count: 0
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case DECREMENT:
            return {count: state.count - 1};

        case RESET:
            return {count: 0};

        case INCREMENT:
            return {count: state.count + 1};

        case CHANGE:
            return {count: action.payload};
    
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store;