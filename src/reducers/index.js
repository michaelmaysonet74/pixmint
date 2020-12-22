import { combineReducers } from 'redux';

import RGBReducer from './rgb-reducer';
import HexChangerReducer from './hex-changer-reducer';

export default combineReducers({
    rgb: RGBReducer,
    hexChanger: HexChangerReducer,
});
