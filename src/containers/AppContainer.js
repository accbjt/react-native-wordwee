import { connect } from 'react-redux';
import App from '../components/App';
import wordList from '../../store/words.json'

const capitalize = word => {
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

const mapStateToProps = state => {
  return {
    youtubeView: state.youtube,
    youtubeSearch: state.youtubeSearch.search,
    currentWord: state.words.currentWord,
    inputValue: state.words.inputValue,
    buttons: state.words.buttons,
    words: state.words.buttonWords,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateInputValue: (value, currentWord) => {
    const word = currentWord.slice(0, value.length).toLowerCase()
    const isMatching = word == value.toLowerCase()

    if (currentWord.toLowerCase() === value.toLowerCase()) {
      dispatch({
        type: 'UPDATE_INPUT',
        value,
      })

      setTimeout(()=>{
        dispatch({
          type: 'UPDATE_BUTTONS_VIEW',
          value: true
        })
      }, 1000)
    } else if (isMatching){
      dispatch({
        type: 'UPDATE_INPUT',
        value,
      })
    } else if (value.length === 1){
      dispatch({
        type: 'UPDATE_INPUT',
        value: '',
      })
    }
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
      }, 120000)
    } else {
      dispatch({
        type: 'SHUFFLE_WORDS',
        currentWord,
      })
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
