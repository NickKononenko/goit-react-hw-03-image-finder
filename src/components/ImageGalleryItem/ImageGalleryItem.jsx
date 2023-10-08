import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem} key={this.props.id}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.smallImage}
          alt=""
          id={this.props.id}
          onClick={() => {
            this.props.modalToggle();
            this.props.giveLargeImage(this.props.id);
          }}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
