import React from 'react'
import YoutubeView from './YoutubeView'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App = (props) => {
  if (true) {
    return (
      <YoutubeView />
    )
  } else {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}

export default App
