import React, { Component } from 'react';
import {
    Modal,
    View,
    Slider,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './ControlStyles';
import {
    redChanged,
    redPlusMinus,
    greenChanged,
    greenPlusMinus,
    blueChanged,
    bluePlusMinus,
} from '../../actions';

class Center extends Component {
    getAction(changeAction) {
        switch (this.props.backgroundColor) {
            case '#F07575':
                return changeAction ? this.props.redChanged : this.props.redPlusMinus;
            case '#76E8A6':
                return changeAction ? this.props.greenChanged : this.props.greenPlusMinus;
            case '#65BAEB':
                return changeAction ? this.props.blueChanged : this.props.bluePlusMinus;
        }
    }

    onSliderChange(value) {
        const action = this.getAction(true);
        action(value);
    }

    onIncrement() {
        const action = this.getAction(false);
        action(true);
    }

    onDecrement() {
        const action = this.getAction(false);
        action();
    }

    render() {
        const { backgroundColor, visible } = this.props;

        return (
            <Modal
                visible={visible}
                transparent
                animationType="slide"
                onRequestClose={() => { }}
            >
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                    <View style={styles.centerContainerStyle}>
                        <TouchableWithoutFeedback>
                            <View
                                style={
                                    [
                                        styles.centerCardStyle,
                                        {
                                            backgroundColor
                                        }
                                    ]
                                }
                            >
                                <View style={styles.topRowStyle}>
                                    <TouchableOpacity onPress={this.onIncrement.bind(this)}>
                                        <Icon name="plus" type="entypo" color="white" size={38} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.props.onPress}>
                                        <Icon name="cross" type="entypo" color="white" size={30} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.sliderRowStyle}>
                                    <Slider
                                        step={1}
                                        maximumValue={255}
                                        maximumTrackTintColor="#E2E2E2"
                                        minimumTrackTintColor="white"
                                        onValueChange={this.onSliderChange.bind(this)}
                                        value={this.props.colorVal}
                                    />
                                </View>

                                <View style={styles.bottomRowStyle}>
                                    <TouchableOpacity onPress={this.onDecrement.bind(this)}>
                                        <Icon name="minus" type="entypo" color="white" size={38} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.backgroundColor) {
        case '#F07575':
            return {
                colorVal: state.rgb.red
            };
        case '#76E8A6':
            return {
                colorVal: state.rgb.green
            };
        case '#65BAEB':
            return {
                colorVal: state.rgb.blue
            };
        default:
            return {
                colorVal: 0
            };
    }
};

export default connect(mapStateToProps,
    {
        redChanged,
        redPlusMinus,
        greenChanged,
        greenPlusMinus,
        blueChanged,
        bluePlusMinus,
    }
)(Center);
