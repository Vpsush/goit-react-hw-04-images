import css from './ImageGalleryItem.module.css';
import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
        width="400px"
        height="300px"
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
