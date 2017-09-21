import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddEvent extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onFormSubmit}>
          <div>
              <label htmlFor="eventName">Name:</label>
              <input type="text" id="eventName" name="event_name" onChange={this.props.onEventNameInput} />
          </div>
          <div>
              <label htmlFor="artist">Artist</label>
              <input type="text" id="artist" name="artist_name" onChange={this.props.onArtistInput} />
          </div>
          <div>
              <label htmlFor="venue">Venue</label>
              <input type="text" id="venue" name="venue_name" onChange={this.props.onVenueInput} />
          </div>
          <div>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" onChange={this.props.onAddressInput} />
          </div>
          <div>
              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" onChange={this.props.onPriceInput} />
          </div>
          <div>
              <label htmlFor="start">Opening Time:</label>
              <input type="text" id="start" name="opening_time" onChange={this.props.onStartTimeInput} />
          </div>
          <div>
              <label htmlFor="end">Closing Time</label>
              <input type="text" id="end" name="closing_time" onChange={this.props.onEndTimeInput} />
          </div>
          <div className="button">
            <button type="submit" >Create</button>
          </div>
        </form>
      </div>
    );
  }
}

AddEvent.propTypes = {
  // onSubmitNewEvent: PropTypes.func.isRequired(),
};

export default AddEvent;
