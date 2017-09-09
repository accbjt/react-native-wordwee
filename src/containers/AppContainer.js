import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  youtubeView: true,
});

const mapDispatchToProps = dispatch => ({
  showForm: () => {
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
