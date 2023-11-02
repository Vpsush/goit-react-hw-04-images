import css from './Searchbar.module.css';
// import handleSearch from 'App';
import React, { useState } from 'react';

export const Searchbar = handleSearch => {
  const [query, setQuery] = useState();
  // state = {
  //   value: '',
  // };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return 'Please enter a search value';
      // return;
    }

    handleSearch(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>
            <svg className={css.icon}>
              <use href="../../services/symbol-defs.svg#icon-search"></use>
            </svg>
          </span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// import css from './Searchbar.module.css';

// import React, { Component } from 'react';

// class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.handleSearch(this.state.value);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <span className={css.SearchFormButtonLabel}>
//               <svg className={css.icon}>
//                 <use href="../../services/symbol-defs.svg#icon-search"></use>
//               </svg>
//             </span>
//           </button>
//           <input
//             className={css.SearchFormInput}
//             type="text"
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.value}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
