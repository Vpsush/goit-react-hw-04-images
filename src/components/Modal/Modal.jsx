// import React, { useState } from 'react';
// import css from './Modal.module.css';

// const Modal = ({modalData, closeModal}) => {
//   const [] = useState()

//   componentDidMount() {
//     window.addEventListener('keydown', handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <div className={css.Overlay} onClick={this.props.closeModal}>
//         <div className={css.modal}>
//           <button onClick={this.props.closeModal} className={css.closeBtn}>
//             ❌
//           </button>
//           <h2>Product Details</h2>
//           <img
//             src={this.props.largeImageURL}
//             alt="Large Product"
//             className={css.image}
//           />
//         </div>
//       </div>
//     );
//   }
// }
