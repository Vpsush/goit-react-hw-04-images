import css from './Searchbar.module.css';

import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
