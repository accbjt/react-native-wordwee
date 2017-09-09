import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    youtubeView: state.youtubeView,
    currentWord: state.words.currentWord,
  }
};

const mapDispatchToProps = dispatch => ({
  newWord: () => {
    dispatch({
      type: 'NEW_WORD'
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
