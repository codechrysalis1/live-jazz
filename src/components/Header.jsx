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

  get authButton() {
    if(this.props.user) {
      return (
        <div id='facebook-login'>
          <a href=''> { this.props.user.displayName } </a>
          <a href='/auth/logout'> Logout </a>
        </div>
      )
    }
    return <a id='facebook-login' href='/auth/facebook'>Log in with Facebook</a>;
  }

  render() {
    return (
      <header>
        <h1 id='title'>Live Jazz</h1>
        { this.authButton }
      </header>
    )
  }
}

export default Header;
