import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import RGBDisplayer from './RGBDisplayer';
import HexDisplayer from './HexDisplayer';
import styles from './ColorDisplayerStyles';

class ColorDisplayer extends Component {
    renderDisplayer() {
        const { red, green, blue, isHex } = this.props;

        if (isHex) {
            return <HexDisplayer red={red} green={green} blue={blue} />;
        }

        return <RGBDisplayer red={red} green={green} blue={blue} />;
    }

    render() {
        const { red, green, blue } = this.props;

        return (
            <TouchableOpacity
                style={
                    [
                        styles.colorDisplayerStyle,
                        {
                            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                        }
                    ]
                }
                onPress={() => { }}
                activeOpacity={1}
            >
                {this.renderDisplayer()}
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    const { red, green, blue } = state.rgb;
    const { isHex } = state.hexChanger;

    return { red, green, blue, isHex };
};

export default connect(mapStateToProps)(ColorDisplayer);
