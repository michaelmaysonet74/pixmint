import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const colorDisplayerStyles = StyleSheet.create({
    colorDisplayerStyle: {
        height: isIphoneX() ? 400 : 350,
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'flex-end',
        position: 'relative',
        padding: 10,
        paddingBottom: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    textContainerStyle: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.7)',
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 30,
        margin: 10,
    }
});

export default colorDisplayerStyles;
