import { connect } from 'react-redux';

import Header from '../components/Header';
import { setJWT, setUserProfile, logout } from '../actions';

const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

// This is where hello.js is used.
// It is pulled in as a global attached to the window.

// Simplify JSON posting
const postJson = async (url, objToPost) => {
  const serializedJson = JSON.stringify(objToPost);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const options = {
    headers,
    method: 'POST',
    body: serializedJson,
  };
  const readableStream = await fetch(url, options);
  const parsedResponseObject = await (readableStream).json();
  return parsedResponseObject;
};

const mapDispatchToProps = (dispatch) => {
  // Initialize hello with facebook app_id

  window.hello.init({
    facebook: '120884018612158',
  }, {
    redirect_uri: '/',
  });

  // Register hello callback once, before anything is dispatched
  // When hello attempts to log in after login button click, this callback is executed.
  window.hello.on('auth.login', async (auth) => {
    const socialToken = auth.authResponse.access_token;
    window.hello('facebook');
    // TODO: stop relying on the server to send user's name and email
    // should only receive JWT
    const response = await postJson('/api/auth', {
      network: 'facebook',
      socialToken,
    });
    if (response.jwt && response.userProfile.email) {
      dispatch(setUserProfile(response.userProfile));
    }
    if (response.jwt) {
      dispatch(setJWT(response.jwt));
    }
  });
  return {
    onLoginButtonClick: async () => {
      const facebook = window.hello('facebook');
      let responseA = await facebook.login(
        {
          scope: 'email',
          // force: true,
          return_scopes: true,
        },
      );
      let scopes = responseA.authResponse.granted_scopes.split(',');
      while (scopes === undefined || scopes.indexOf('email') < 0) {
        responseA = await facebook.login({
          scope: 'email',
          auth_type: 'rerequest',
          force: true,
          return_scopes: true,
        });
        scopes = responseA.authResponse.granted_scopes.split(',');
      }
    },
    onLogoutButtonClick: () => {
      window.hello.logout('facebook');
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
