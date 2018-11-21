import axios from 'axios';
import { FETCH_OFFERS, SORT_BY, SEARCH_OFFER, HANDEL_ERROR } from './types';
import Offer from '../../API/Models/Offer';

/**
 * @description Action responsible for error handling
 * @param payload
 * @returns {{type: string, payload: *}}
 */
const handleError = payload => ({
  type: HANDEL_ERROR,
  payload,
});

/**
 * @description fetching order from the API and modeling the response as well as handling the errors.
 * @returns {Function}
 *
 */
export const fetchOffers = () => async dispatch => {
  const url = 'https://content.sixt.io/codingtasks/offers.json';
  try {
    const {
      data: { offers },
    } = await axios.get(url);
    dispatch({
      type: FETCH_OFFERS,
      payload: offers.map(offer => new Offer(offer)),
    });
  } catch (error) {
    dispatch(handleError(error));
  }
};

/**
 * @description Sort by action to sort data based on [ amount, name, Popularity ]
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const sortBy = payload => ({
  type: SORT_BY,
  payload,
});

/**
 * @description Search for specif offer by [NAME]
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export const searchOffer = payload => ({
  type: SEARCH_OFFER,
  payload,
});
