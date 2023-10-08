import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onEscape);
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.modalToggle}>
        <div className={css.Modal}>
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
