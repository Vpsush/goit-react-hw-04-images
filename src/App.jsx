import React, { Component } from 'react';
import css from 'App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ErrorCard from './components/ErrorCard';
import { fetchImages } from './services/fetchImages';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    showModal: false,
    query: '',
    page: 1,
    hasMoreImages: true, // Initialize it as true
  };

  // componentDidUpdate(_, prevState) {
  //   if (this.state.query !== prevState.query) {
  //     this.setState({ page: 1, images: [], isLoading: false });
  //     if (this.state.page === 1) {
  //       this.fetchImagesInternal(this.state.query, this.state.page);
  //     }
  //   }

  //   if (this.state.page !== prevState.page) {
  //     this.fetchImagesInternal(this.state.query, this.state.page);
  //   }
  // }

  componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.fetchImagesInternal(this.state.query, this.state.page);
    }
  }

  fetchImagesInternal = async (query, page) => {
    this.setState({
      isLoading: true,
    });

    const { images, error } = await fetchImages(query, page);

    if (error) {
      this.setState({
        error,
        hasMoreImages: false,
        isLoading: false,
      });
      return;
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...images],
      error: null,
      isLoading: false,
      hasMoreImages: images.length === 12,
    }));
  };

  handleSearch = query => {
    this.setState(
      {
        page: 1,
        images: [],
        query,
        hasMoreImages: true,
        error: '',
      }
      // () => this.fetchImagesInternal(query, 1)
    );
  };

  openModal = imageURL => {
    this.setState({
      showModal: true,
      modalImageURL: imageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImageURL: '',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      // error: '',
    }));
  };

  render() {
    const { error, hasMoreImages, query } = this.state;

    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {query && hasMoreImages && <Button onClick={this.onLoadMore} />}
        {this.state.showModal && (
          <Modal
            closeModal={this.closeModal}
            largeImageURL={this.state.modalImageURL}
          />
        )}
        {this.state.isLoading && <Loader />}
        {error && <ErrorCard>{error}</ErrorCard>}
      </div>
    );
  }
}

export default App;
