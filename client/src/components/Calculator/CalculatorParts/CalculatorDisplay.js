import React, { Component } from 'react'



class CalculatorDisplay extends Component {
  render() {
    const string = this.props.data.join('')
    return <div className="Display"> {string} </div>
  }
}
export default CalculatorDisplay;