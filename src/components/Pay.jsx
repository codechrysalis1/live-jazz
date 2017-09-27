import React, { Component } from 'react';

import { Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';

import '../styles/Pay.css';

class Pay extends Component {
  render() {
    return (
      <main className="restrict-width">
        <Elements>
          <CheckoutForm userProfile={this.props.userProfile} eventID={this.props.event.id} />
        </Elements>
      </main>
    );
  }
}

export default Pay;
