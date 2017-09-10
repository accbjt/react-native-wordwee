import React from 'react';
import {
  WebView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const YoutubeView = (props) => (
  <WebView
    source={{uri: `https://www.youtube.com/results?sp=CANQFA%253D%253D&q=${props.url}`}}
    scalesPageToFit={true}
  />
)

export default YoutubeView
