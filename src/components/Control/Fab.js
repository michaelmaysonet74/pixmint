import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './ControlStyles';

class Fab extends Component {
  state = {
    isPressed: false,
  };

  render() {
    const {
      backgroundColor,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.fabStyle, {backgroundColor: backgroundColor}]} />
      </TouchableOpacity>
    );
  }
};

export default Fab;
