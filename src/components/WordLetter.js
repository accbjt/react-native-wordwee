import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
} from 'react-native';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  word: {
    fontSize: 50,
    fontFamily: 'ChalkboardSE-Bold',
    backgroundColor: 'transparent',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 50,
    marginLeft: 8,
    marginRight: 8,
    width: 45,
    textAlign: 'center',
  },
  wordBold: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontFamily: 'ChalkboardSE-Bold',
    color: '#fdbf0d',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 42,
    marginLeft: 8,
    marginRight: 8,
    width: 45,
    textAlign: 'center',
  },
});

export default class WordLetter extends Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    this.spring()
  }

  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  render() {
    return (
      <View>
        <Animated.View style={[styles.rowContainer, { transform: [{scale: this.springValue}] }]}>
            <Text
              style={this.props.i <= this.props.letterIndex ? styles.wordBold : styles.word}
            >{this.props.letter}</Text>
        </Animated.View>
      </View>
    );
  }
}
