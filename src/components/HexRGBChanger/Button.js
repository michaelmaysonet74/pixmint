import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './HexRGBChangerStyles';

const Button = ({
    children,
    highlighted = {
        button: null,
        text: null
    },
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonStyle, highlighted.button]}>
                <Text style={[styles.textStyle, highlighted.text]}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
