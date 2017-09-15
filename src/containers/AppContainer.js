import { connect } from 'react-redux';
import App from '../components/App';
import wordList from '../../store/words.json'
import Tts from 'react-native-tts'
import { checkIfMatching } from '../../store/actions'

Tts.setDefaultVoice('com.apple.ttsbundle.Tessa-compact');

const capitalize = word => {
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

const speak = (word) => {
  Tts.speak(word);
}

const mapStateToProps = state => {
  return {
    youtubeView: state.youtube,
    youtubeSearch: state.youtubeSearch.search,
    currentWord: state.words.currentWord,
    buttons: state.words.buttons,
    words: state.words.buttonWords,
    letterOptions: state.words.letterOptions,
    letterIndex: state.words.currentLetterIndex,
    speak,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateInputValue: (value) => {
    speak(value)
    dispatch(checkIfMatching(value))
  },
  newWord: (word, currentWord) => {
    if (word === currentWord) {
      dispatch({
        type: 'UPDATE_INPUT',
        value: '',
      })

      dispatch({
        type: 'YOUTUBE_VISIBLE'
      })

      setTimeout(()=>{
        dispatch({
          type: 'YOUTUBE_VISIBLE'
        })
      }, 5000)
    } else {
      dispatch({
        type: 'SHUFFLE_WORDS',
        currentWord,
      })
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
