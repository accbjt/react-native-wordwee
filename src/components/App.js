import React from 'react'
import YoutubeView from './YoutubeView'
import Tts from 'react-native-tts'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const speak = (word) => {
  setTimeout(() => {
    Tts.speak(word);
  }, 200)
}

const App = (props) => {
  if (props.youtubeView) {
    return (
      <YoutubeView />
    )
  } else {
    speak(props.currentWord)
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Button
          title="New Word"
          color="#841584"
          onPress={props.newWord}
        />
      </View>
    )
  }
}

export default App
