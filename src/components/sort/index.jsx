import React from 'react';
import PropTypes from 'prop-types';
import styles from './sort.scss';

const Sorting = ({ handleSort, sortBy }) => (
  <ul className={styles.sortBy}>
    <li>
      <button
        name="name"
        className={sortBy === 'name' ? `${styles['selected-sort']}` : ''}
        type="button"
        onClick={handleSort}
      >
        Sort by name
      </button>
    </li>
    <li>
      <button
        name="price"
        className={sortBy === 'price' ? `${styles['selected-sort']}` : ''}
        type="button"
        onClick={handleSort}
      >
        Sort by price
      </button>
    </li>
    <li>
      <button
        name="popularity"
        className={sortBy === 'popularity' ? `${styles['selected-sort']}` : ''}
        type="button"
        onClick={handleSort}
      >
        Sort by popularity
      </button>
    </li>
  </ul>
);

Sorting.propTypes = {
  handleSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default Sorting;
