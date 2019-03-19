import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalendarCard extends Component {
  render(){
    return(
      <div className='calendarcard' >
      <p>{this.props.day}</p>
      <hr></hr>
      </div>
    );
  }

}

export default CalendarCard;