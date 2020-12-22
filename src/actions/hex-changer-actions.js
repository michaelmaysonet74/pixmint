import {
    RGB_TO_HEX,
    HEX_TO_RGB,
} from './types';

export const rgbToHex = () => ({ type: RGB_TO_HEX });

export const hexToRGB = () => ({ type: HEX_TO_RGB });
