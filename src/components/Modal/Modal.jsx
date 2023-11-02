// import React, { Component } from 'react';
// import css from './Modal.module.css';
// import * as basicLightbox from 'basiclightbox';

// export default class Modal extends Component {
//   state = {
//     largeImageURL,
//   };
//   render() {
//     return (
//       <div className={css.Overlay}>
//         <div className={css.modal}>
//           <button onClick={this.props.closeModal} className={css.closeBtn}>
//             ❌
//           </button>
//           <h2>Product Details</h2>

//           {/* <div>

//   const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
//           <button onClick={this.handleIncrementProduct}>
//             Add product: {this.state.counter}
//           </button>
//         </div> */}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.closeModal}>
        <div className={css.modal}>
          <button onClick={this.props.closeModal} className={css.closeBtn}>
            ❌
          </button>
          <h2>Product Details</h2>
          <img
            src={this.props.largeImageURL}
            alt="Large Product"
            className={css.image}
          />
        </div>
      </div>
    );
  }
}
