import { connect } from 'react-redux';
import Header from '../components/Header';

import { setUser } from '../actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onComponentDidMount: (user) => {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
