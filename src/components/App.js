import React from 'react'
import YoutubeView from './YoutubeView'
import Letter from './Letter'
import WordLetter from './WordLetter'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
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
    fontSize: 60,
    fontFamily: 'ChalkboardSE-Bold',
    color: '#fdbf0d',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 42,
    width: '10%',
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
    props.speak(props.currentWord)

    return (
      <View
        style={styles.wordsView}
      >
        <View style={styles.rowContainer}>
          {props.currentWord.split('').map((letter, i) => (
            <WordLetter
              key={`${letter}-${i}`}
              i={i}
              letter={letter}
              letterIndex={props.letterIndex}
            />
          ))}
        </View>
        <View style={styles.rowContainer}>
          {props.letterOptions.map((letter, i) => (
            <Letter
              key={`${letter}-${i}`}
              index={i}
              updateInputValue={props.updateInputValue}
              letter={letter}
            />
          ))}
        </View>
      </View>
    )
  }
}

export default App
