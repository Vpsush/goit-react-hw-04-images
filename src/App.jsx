// import React, { useState, useEffect } from 'react';
// import css from 'App.module.css';
// import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import Loader from './components/Loader/Loader';
// import Modal from './components/Modal/Modal';
// import Button from './components/Button/Button';
// import ErrorCard from './components/ErrorCard';
// import { fetchImages } from './services/fetchImages';

// export const App = () => {
//   const [images, useImages] = useState([]);
//   const [isLoading, useIsLoading] = useState(false);
//   const [error, useError] = useState('');
//   const [showModal, useShowModal] = useState(false);
//   const [query, useQuery] = useState('');
//   const [page, usePage] = useState(1);
//   const [hasMoreImages, useHasMoreImages] = useState(true);

//   // componentDidUpdate(_, prevState) {
//   //   if (
//   //     this.state.query !== prevState.query ||
//   //     this.state.page !== prevState.page
//   //   ) {
//   //     this.fetchImagesInternal(this.state.query, this.state.page);
//   //   }
//   // }
//   useEffect(() => {
//     if (!query) return;
//   }, [query, page]);

//   fetchImagesInternal = async (query, page) => {
//     this.setState({
//       isLoading: true,
//     });

//     const { images, error } = await fetchImages(query, page);

//     if (error) {
//       this.setState({
//         error,
//         hasMoreImages: false,
//         isLoading: false,
//       });
//       return;
//     }

//     this.setState(prevState => ({
//       images: [...prevState.images, ...images],
//       error: null,
//       isLoading: false,
//       hasMoreImages: images.length === 12,
//     }));
//   };

//   handleSearch = query => {
//     this.setState(
//       {
//         page: 1,
//         images: [],
//         query,
//         hasMoreImages: true,
//         error: '',
//       }
//       // () => this.fetchImagesInternal(query, 1)
//     );
//   };

//   openModal = imageURL => {
//     this.setState({
//       showModal: true,
//       modalImageURL: imageURL,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//       modalImageURL: '',
//     });
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       // error: '',
//     }));
//   };

//   // render() {
//   //   const { error, hasMoreImages, query } = this.state;

//   return (
//     <div className={css.App}>
//       <Searchbar handleSearch={this.handleSearch} />
//       <ImageGallery images={this.state.images} openModal={this.openModal} />
//       {query && hasMoreImages && <Button onClick={this.onLoadMore} />}
//       {this.state.showModal && (
//         <Modal
//           closeModal={this.closeModal}
//           largeImageURL={this.state.modalImageURL}
//         />
//       )}
//       {this.state.isLoading && <Loader />}
//       {error && <ErrorCard>{error}</ErrorCard>}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import css from 'App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ErrorCard from './components/ErrorCard';
import { fetchImages } from './services/fetchImages';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [modalImageURL, setModalImageURL] = useState([]);

  useEffect(() => {
    const fetchImagesInternal = async () => {
      setIsLoading(true);

      const { images: fetchedImages, error: fetchError } = await fetchImages(
        query,
        page
      );

      if (fetchError) {
        setError(fetchError);
        setHasMoreImages(false);
        setIsLoading(false);
        return;
      }

      setImages(prevImages => [...prevImages, ...fetchedImages]);
      setError('');
      setIsLoading(false);
      setHasMoreImages(fetchedImages.length === 12);
    };

    if (query && (page === 1 || page !== 1)) {
      fetchImagesInternal();
    }
  }, [query, page]);

  const handleSearch = newQuery => {
    setPage(1);
    setImages([]);
    setQuery(newQuery);
    setHasMoreImages(true);
    setError('');
  };

  const openModal = imageURL => {
    setShowModal(true);
    setModalImageURL(imageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImageURL('');
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar handleSearch={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {query && hasMoreImages && <Button onClick={onLoadMore} />}
      {showModal && (
        <Modal closeModal={closeModal} largeImageURL={modalImageURL} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorCard>{error}</ErrorCard>}
    </div>
  );
}

export default App;
