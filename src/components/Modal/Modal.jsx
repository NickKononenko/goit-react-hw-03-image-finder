import { Component } from 'react';

class Modal extends Component {
  state = {};
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

// 1. Додати onClick на image в ImageGalleryItem
// 2. По кліку має передаватись пропсом в модуль велике зображення і має викликатись саме модальне вікно
