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
} from './types';

export const redChanged = (redValue) => ({
    type: RED_CHANGED,
    payload: redValue,
});

export const redPlusMinus = (isIncrement) => ({
    type: isIncrement ? RED_INCREMENT : RED_DECREMENT,
});

export const greenChanged = (greenValue) => ({
    type: GREEN_CHANGED,
    payload: greenValue,
});

export const greenPlusMinus = (isIncrement) => ({
    type: isIncrement ? GREEN_INCREMENT : GREEN_DECREMENT,
});

export const blueChanged = (blueValue) => ({
    type: BLUE_CHANGED,
    payload: blueValue,
});

export const bluePlusMinus = (isIncrement) => ({
    type: isIncrement ? BLUE_INCREMENT : BLUE_DECREMENT,
});
