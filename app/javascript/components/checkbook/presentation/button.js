import React, { Component } from 'react';
import '../../../../assets/stylesheets/button.css';

class Button extends Component {
  render() {
    return (
      <button className='button' onClick={this.props.onClick} >{this.props.children}</button>
    )
  }
}

export default Button
