import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import styles from './HexRGBChangerStyles';
import { rgbToHex, hexToRGB } from '../../actions';

const highlighted = {
    button: {
        backgroundColor: '#747474',
    },
    text: {
        color: 'white',
    },
};

class HexRGBChanger extends Component {
    onRGBPress() {
        this.props.hexToRGB();
    }

    onHexPress() {
        this.props.rgbToHex();
    }

    renderRGBButton() {
        if (!this.props.isHex) {
            return <Button highlighted={highlighted}>RGB</Button>;
        }

        return <Button onPress={this.onRGBPress.bind(this)}>RGB</Button>;
    }

    renderHexButton() {
        if (this.props.isHex) {
            return <Button highlighted={highlighted}>Hex</Button>;
        }

        return <Button onPress={this.onHexPress.bind(this)}>Hex</Button>;
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderRGBButton()}
                {this.renderHexButton()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { isHex } = state.hexChanger;
};

export default connect(mapStateToProps,
    {
        rgbToHex,
        hexToRGB,
    }
)(HexRGBChanger);
