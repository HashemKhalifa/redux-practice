import sort from 'lodash/sortBy';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * @returns {Array}
 */
const offersSelector = state => state.offers.items;
const sortBySelector = state => state.offers.sortType;
const searchSelector = state => state.offers.search;

/**
 * @description get offers and parse it to reelect for the sake of Memoization
 */
export const getOffers = createSelector(
  offersSelector,
  sortBySelector,
  searchSelector,
  (offers, sortBy, search) =>
    sort(offers, `sort.${sortBy}`).filter(
      offer =>
        !search ||
        offer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    ),
);

/**
 *
 * @description Memorizing the sort
 */
export const getSort = createSelector(
  sortBySelector,
  sortBy => sortBy,
);
