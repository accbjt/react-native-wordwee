import React from 'react';
import {
  WebView,
} from 'react-native';

const YoutubeView = () => (
  <WebView
    source={{uri: 'https://youtube.com'}}
    style={{marginTop: 20}}
  />
)

export default YoutubeView
