import { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

// 1. Додати onClick на image в ImageGalleryItem
// 2. По кліку має передаватись пропсом в модуль велике зображення і має викликатись саме модальне вікно
