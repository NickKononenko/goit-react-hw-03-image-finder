import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="LoadMore" type="button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;