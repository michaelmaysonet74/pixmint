import React from 'react';
import { Text, View } from 'react-native';

import styles from './HeaderStyles';

const Header = ({ headerText }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                {headerText}
            </Text>
        </View>
    );
};

export default Header;
