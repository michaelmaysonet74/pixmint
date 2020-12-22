import React from 'react';
import { View } from 'react-native';

import Control from './Control';
import styles from './ControlStyles';

const ControlContainer = () => {
    return (
        <View style={styles.containerStyle}>
            <Control backgroundColor="#F07575" />
            <Control backgroundColor="#76E8A6" />
            <Control backgroundColor="#65BAEB" />
        </View>
    );
};

export default ControlContainer;
