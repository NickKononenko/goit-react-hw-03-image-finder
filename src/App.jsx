import React, { Component } from 'react';
import { fetchImages } from 'services/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: null,
    isLoading: false,
    error: '',
    page: 1,
    totalHits: 1,
    isModalOpen: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: null });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchAllImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { query, page } = this.state;
      const images = await fetchImages(query, page);
      this.setState(prevState => ({
        images: prevState.images
          ? [...prevState.images, ...images.hits]
          : images.hits,
      }));
      this.setState({ totalHits: images.totalHits });
    } catch (error) {
      this.setState({ error: 'Помилка при завантаженні зображень' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.fetchAllImages();
    }
  }

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error && <p>{this.state.error}</p>}
        <ImageGallery>
          {showImages &&
            this.state.images.map(image => (
              <ImageGalleryItem
                id={image.id}
                key={image.id}
                smallImage={image.webformatURL}
                modalToggle={this.modalToggle}
              />
            ))}
        </ImageGallery>
        {this.state.images &&
          this.state.images.length > 0 &&
          this.state.images.length < this.state.totalHits && (
            <Button onClick={this.loadMore} />
          )}
        {this.state.isModalOpen && <Modal />}
      </>
    );
  }
}

export default App;
