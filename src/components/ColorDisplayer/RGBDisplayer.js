import React from 'react';
import { Text, View } from 'react-native';
import { getTextColor } from '../../utils';

import styles from './ColorDisplayerStyles';

const RGBDisplayer = ({ red, green, blue }) => {
    return (
        <View style={styles.textContainerStyle}>
            <Text
                style={
                    [
                        styles.textStyle,
                        getTextColor(red, green, blue),
                    ]
                }
            >
                R: {red}
            </Text>
            <Text
                style={
                    [
                        styles.textStyle,
                        getTextColor(red, green, blue),
                    ]
                }
            >
                G: {green}
            </Text>
            <Text
                style={
                    [
                        styles.textStyle,
                        getTextColor(red, green, blue),
                    ]
                }
            >
                B: {blue}
            </Text>
        </View>
    );
};

export default RGBDisplayer;
