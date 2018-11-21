/* eslint-disable indent */
import {
  FETCH_OFFERS,
  SORT_BY,
  SEARCH_OFFER,
  HANDEL_ERROR,
} from '../actions/types';

const initialState = {
  items: [],
  sortType: 'name',
  search: '',
  error: '',
  isFetched: false,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_OFFERS:
      return {
        ...state,
        items: action.payload,
        isFetched: true,
      };
    case SORT_BY:
      return {
        ...state,
        sortType: action.payload,
      };
    case SEARCH_OFFER:
      return {
        ...state,
        search: action.payload,
      };
    case HANDEL_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
