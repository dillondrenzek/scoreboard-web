import React, { Component } from 'react';

class Button extends Component {

  getTypeClassName() {
    const { type } = this.props;
    switch (type) {
      case 'success':
        return 'btn-success';
      case 'secondary':
        return 'btn-secondary';
      default:
        return 'btn-default';
    }
  }

  render() {
    const {type, children, onClick} = this.props;
    const typeClassName = this.getTypeClassName();

    const className = `Button btn ${typeClassName}`;

    return <button className={className} onClick={onClick}>
      { children }
    </button>
  }
}

export default Button;
