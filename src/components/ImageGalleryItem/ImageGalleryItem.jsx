import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.id}>
        <img
          className="ImageGalleryItem-image"
          src={this.props.src}
          alt=""
          id={this.props.id}
          onClick={this.props.modalToggle}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
