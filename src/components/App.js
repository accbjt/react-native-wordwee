import React from 'react'
import YoutubeView from './YoutubeView'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var styles = StyleSheet.create({
  wordsView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da4ff',
    width: '100%',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  word: {
    fontSize: 50,
    fontFamily: 'ChalkboardSE-Bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 50,
    width: '10%',
  },
  wordBold: {
    fontSize: 50,
    fontFamily: 'ChalkboardSE-Bold',
    color: 'gray',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 50,
    width: '10%',
  },
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

const App = (props) => {
  if (props.youtubeView) {
    return (
      <YoutubeView url={props.youtubeSearch} />
    )
  } else if (props.buttons){
    props.speak(props.currentWord)

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {
          props.words.map((word, i) => (
            <TouchableHighlight
              style={{
                backgroundColor: '#6da4ff',
                width: '60%',
                padding: 10,
                marginTop: 5,
                borderRadius: 35,
              }}
              key={`word-${i}`}
              onPress={() => { props.newWord(word, props.currentWord) }}
            >
            <Text
              style={{
                textAlign: 'center',fontSize: 50,
                fontFamily: 'ChalkboardSE-Bold',
                color: 'white',
              }}
            >{word.toUpperCase()}
            </Text>
          </TouchableHighlight>
          ))
        }
      </View>
    )
  } else {
    if (!props.letterIndex) {
      props.speak(props.currentWord)
    }

    return (
      <View
        style={styles.wordsView}
      >
        <View style={styles.rowContainer}>
          {props.currentWord.split('').map((letter, i) => (
            <Text
              key={`${letter}-${i}`}
              style={i <= props.letterIndex ? styles.wordBold : styles.word}
            >{letter}</Text>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {props.letterOptions.map((letter, i) => (
            <TouchableHighlight
              style={styles.letterContainer}
              key={`letter-${i}`}
              onPress={() => {props.updateInputValue(letter)}}
            >
              <Text
                style={styles.letter}
              >{letter}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    )
  }
}

export default App
