import React from 'react'
import YoutubeView from './YoutubeView'
import Tts from 'react-native-tts'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
} from 'react-native';

const speak = (props) => {
  setTimeout(() => {
    Tts.speak(props.currentWord);
  }, 200)
}

const App = (props) => {
  if (props.youtubeView) {
    return (
      <YoutubeView url={props.youtubeSearch}/>
    )
  } else if (props.buttons){
    speak(props)

    return (
      <View>
        {
          props.words.map((word, i) => (
            <Button
              key={`word-${i}`}
              title={word}
              color="#841584"
              onPress={() => { props.newWord(word, props.currentWord) }}
            />
          ))
        }
      </View>
    )
  } else {
    if (!props.inputValue) {
      speak(props)
    }

    return (
      <View>
        <Text>{props.currentWord.toLocaleUpperCase()}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => props.updateInputValue(text, props.currentWord)}
          value={props.inputValue}
        />
      </View>
    )
  }
}

export default App
