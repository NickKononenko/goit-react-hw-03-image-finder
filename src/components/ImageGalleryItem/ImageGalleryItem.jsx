import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.id}>
        <img
          className="ImageGalleryItem-image"
          src={this.props.smallImage}
          alt=""
          id={this.props.id}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
