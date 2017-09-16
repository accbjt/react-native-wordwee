import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
} from 'react-native';

const styles = StyleSheet.create({
  letterContainer: {
    backgroundColor: 'white',
    padding: 2,
    margin: 15,
    borderRadius: 30,
    height: 60,
    width: 60,
    alignItems: 'center',
    borderWidth: 1.0,
    borderColor: '#d6d7da',
  },
  letter: {
    fontFamily: 'ChalkboardSE-Bold',
    fontSize: 35,
    backgroundColor: 'transparent',
    color: '#6da4ff',
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 45,
  },
});

export default class Letter extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1500
      }).start()
    }, 500)
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }

    const { updateInputValue, letter, index } = this.props
    return (
      <View>
        <Animated.View style={[animatedStyle]}>
          <TouchableHighlight
            style={styles.letterContainer}
            key={`letter-${index}`}
            onPress={() => {updateInputValue(letter)}}
          >
            <Text
              style={styles.letter}
            >{letter}
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}
