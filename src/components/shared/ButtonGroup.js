import React, { Component } from 'react';

class ButtonGroup extends Component {


  render() {
    const {children} = this.props;
    return <div className="ButtonGroup btn-group">{ children }</div>
  }
}

export default ButtonGroup;
