import React from 'react';
import { Component } from 'react';

import '../styles/Header.css';

class Header extends Component {
  async componentDidMount() {
    const user = await (await fetch('/auth/user', {
      credentials: 'include',
    })).json();
    user && this.props.onComponentDidMount(user);
  }

  render() {
    return (
      <header>
        <h1 id='title'>Live Jazz</h1>
        { this.props.user ? <a id='facebook-login' href=''> { this.props.user.displayName } </a> : <a id='facebook-login' href='/auth/facebook'>Log in with Facebook</a> }
      </header>
    )
  }
}

export default Header;
