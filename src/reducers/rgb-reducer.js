import {
    RED_CHANGED,
    RED_INCREMENT,
    RED_DECREMENT,

    GREEN_CHANGED,
    GREEN_INCREMENT,
    GREEN_DECREMENT,

    BLUE_CHANGED,
    BLUE_INCREMENT,
    BLUE_DECREMENT,
} from '../actions/types';

const MIN_LIMIT = 0;
const MAX_LIMIT = 255;
const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

const INITIAL_STATE = {
    red: 0,
    green: 0,
    blue: 0,
};

function incrementColor(state, color) {
    if (state[color] < MAX_LIMIT) {
        return {
            ...state,
            [color]: state[color] + 1
        }
    }
    return state;
}

function decrementColor(state, color) {
    if (state[color] > MIN_LIMIT) {
        return {
            ...state,
            [color]: state[color] - 1
        }
    }
    return state;
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RED_CHANGED:
            return {
                ...state,
                red: action.payload
            };

        case RED_INCREMENT:
            return incrementColor(state, RED);

        case RED_DECREMENT:
            return decrementColor(state, RED);

        case GREEN_CHANGED:
            return {
                ...state,
                green: action.payload
            };

        case GREEN_INCREMENT:
            return incrementColor(state, GREEN);

        case GREEN_DECREMENT:
            return decrementColor(state, GREEN);

        case BLUE_CHANGED:
            return {
                ...state,
                blue: action.payload
            };

        case BLUE_INCREMENT:
            return incrementColor(state, BLUE);

        case BLUE_DECREMENT:
            return decrementColor(state, BLUE);

        default:
            return state;
    }
};
