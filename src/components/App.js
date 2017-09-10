import React from 'react'
import YoutubeView from './YoutubeView'
import Tts from 'react-native-tts'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

Tts.setDefaultVoice('com.apple.ttsbundle.Tessa-compact');

const speak = (props) => {
  setTimeout(() => {
    Tts.speak(props.currentWord);
  }, 200)
}

const capitalize = word => {
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

const App = (props) => {
  if (props.youtubeView) {
    return (
      <YoutubeView url={props.youtubeSearch}/>
    )
  } else if (props.buttons){
    speak(props)

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
            <TouchableOpacity
              style={{
                borderColor: 'gray',
                borderSize: 1,
                backgroundColor: '#6da4ff',
                width: '60%',
                padding: 10,
                margin: 5,
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
          </TouchableOpacity>
          ))
        }
      </View>
    )
  } else {
    if (!props.inputValue) {
      speak(props)
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#6da4ff',
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontFamily: 'ChalkboardSE-Bold',
            color: 'white',
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        >{capitalize(props.currentWord)}</Text>
        <TextInput
          style={{
            height: 50,
            textAlign: 'center',
            width: '100%',
            fontSize: 50,
            fontFamily: 'ChalkboardSE-Bold',
            color: 'white',
          }}
          onChangeText={(text) => props.updateInputValue(text, props.currentWord)}
          value={props.inputValue}
          autoFocus={true}
        />
      </View>
    )
  }
}

export default App
