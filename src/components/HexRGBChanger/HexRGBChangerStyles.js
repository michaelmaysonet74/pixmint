import { StyleSheet } from 'react-native';

const hexRGBChangerStyles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    buttonStyle: {
        width: 150,
        borderWidth: 2,
        borderColor: '#747474',
        borderRadius: 100,
        margin: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    textStyle: {
        fontSize: 24,
        alignSelf: 'center',
        color: '#747474',
    },
});

export default hexRGBChangerStyles;
