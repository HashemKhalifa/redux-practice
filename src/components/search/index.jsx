import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.scss';

const Search = ({ search, handleSearch }) => (
  <input
    className={styles.search}
    type="text"
    value={search}
    onChange={handleSearch}
  />
);

Search.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
