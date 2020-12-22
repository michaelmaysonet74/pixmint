import React, { Component } from 'react';
import { View } from 'react-native';

import Fab from './Fab';
import Center from './Center';

class Control extends Component {
    state = {
        isCenterVisible: false,
    }

    showCenterOnPress() {
        this.setState({
            isCenterVisible: !this.state.isCenterVisible,
        });
    }

    closeCenterOnPress() {
        this.setState({
            isCenterVisible: false,
        });
    }

    render() {
        const { backgroundColor } = this.props;

        return (
            <View>
                <Fab
                    backgroundColor={backgroundColor}
                    onPress={this.showCenterOnPress.bind(this)}
                />

                <Center
                    backgroundColor={backgroundColor}
                    visible={this.state.isCenterVisible}
                    onPress={this.closeCenterOnPress.bind(this)}
                />
            </View>
        );
    }
}

export default Control;
