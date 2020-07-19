import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { state as stateManager } from 'services';
import Home from './Home';

const mapStateToProps = state => ({
  user: state.getIn(['session', 'user']),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
