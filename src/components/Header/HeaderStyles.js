import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const headerStyles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'flex-end',
        height: isIphoneX() ? 90 : 70,
        paddingLeft: 20,
        position: 'relative',
    },
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});

export default headerStyles;
