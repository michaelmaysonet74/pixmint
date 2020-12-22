import React from 'react';
import { Text, View } from 'react-native';
import { getTextColor } from '../../utils';

import styles from './ColorDisplayerStyles';

const HexDisplayer = ({ red, green, blue }) => {
    const hexRed = red.toString(16).toUpperCase();
    const hexGreen = green.toString(16).toUpperCase();
    const hexBlue = blue.toString(16).toUpperCase();

    return (
        <View style={styles.textContainerStyle}>
            <Text
                style={
                    [
                        styles.textStyle,
                        renderTextColor(red, green, blue),
                    ]
                }
            >
                #{red < 16 ? '0' + hexRed : hexRed}
            </Text>
            <Text
                style={
                    [
                        styles.textStyle,
                        renderTextColor(red, green, blue),
                    ]
                }
            >
                {green < 16 ? '0' + hexGreen : hexGreen}
            </Text>
            <Text
                style={
                    [
                        styles.textStyle,
                        renderTextColor(red, green, blue),
                    ]
                }
            >
                {blue < 16 ? '0' + hexBlue : hexBlue}
            </Text>
        </View>
    );
};

export default HexDisplayer;
