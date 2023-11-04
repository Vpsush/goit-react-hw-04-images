import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ modalData, closeModal, largeImageURL }) => {
  //   const [cl] = useState()

  //   const componentDidMount() {
  //     window.addEventListener('keydown', handleKeyDown);
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.handleKeyDown);
  //   }

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  //   const handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       closeModal();
  //     }
  //   };
  return (
    <div className={css.Overlay} onClick={closeModal}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.closeBtn}>
          ❌
        </button>
        <h2>Product Details</h2>
        <img src={largeImageURL} alt="Large Product" className={css.image} />
      </div>
    </div>
  );
};

export default Modal;
