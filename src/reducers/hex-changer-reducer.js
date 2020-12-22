import {
    RGB_TO_HEX,
    HEX_TO_RGB,
} from '../actions/types';

const INITIAL_STATE = {
    isHex: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RGB_TO_HEX:
            return {
                isHex: true,
            };
        case HEX_TO_RGB:
            return INITIAL_STATE;
        default:
            return state;
    }
};
