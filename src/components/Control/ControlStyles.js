import { StyleSheet } from 'react-native';

const controlStyles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 25,
    },
    fabStyle: {
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    centerContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'relative',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25,
    },
    centerCardStyle: {
        height: 170,
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    topRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomRowStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    sliderRowStyle: {
        height: 80,
        justifyContent: 'center',
    },
});

export default controlStyles;
