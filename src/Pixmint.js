import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Header from './components/Header/Header';
import ColorDisplayer from './components/ColorDisplayer/ColorDisplayer';
import HexRGBChanger from './components/HexRGBChanger/HexRGBChanger';
import ControlContainer from './components/Control/ControlContainer';

class Pixmint extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.pixmintStyle}>
                    <Header headerText="Pixmint" />
                    <ColorDisplayer />
                    <HexRGBChanger />
                    <ControlContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    pixmintStyle: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    }
});

export default Pixmint;