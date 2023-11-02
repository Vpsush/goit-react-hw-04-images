// import { Component } from 'react';
// import css from './ImageGallery.module.css';
// import fetchImages from 'services/fetchImages';

// class ImageGallery extends Component {
//   state = {};

//   render() {
//     fetchImages();
//     return (
//       <ul className={css.gallery}>
//         <li></li>
//       </ul>
//     );
//   }
// }

// export default ImageGallery;

// import React from 'react';
// import css from './ImageGallery.module.css';

// function ImageGallery({ images }) {
//   return (
//     <ul className={css.gallery}>
//       {images.map(image => (
//         <li key={image.id} className={css.galleryItem}>
//           <img src={image.webformatURL} alt={image.tags} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ImageGallery;

// import React, { Component } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import css from './ImageGallery.module.css';

// const ImageGallery = ({ images, openModal }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map(image => (
//         <li key={image.id} className={css.imageGalleryItem}>
//           <img
//             src={image.webformatURL}
//             alt={image.tags}
//             onClick={() => openModal(image.largeImageURL)}
//             width="400px"
//             height="300px"
//             className={css.imageGalleryItemImage}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'; // Import the new component
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
