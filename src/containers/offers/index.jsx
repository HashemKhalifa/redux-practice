/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOffers, getSort } from '../../store/selectors';
import Offer from '../../components/offer';
import Search from '../../components/search';
import Error from '../../components/error';
import SortButtons from '../../components/sort';
import loader from '../../assets/images/loader.gif';

import styles from './offers.scss';

import {
  fetchOffers,
  sortBy as sortByAction,
  searchOffer,
} from '../../store/actions/offersActions';

class Offers extends Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  /**
   * @description handle sort by [name, price, popularity]
   * @param e
   */
  onHandleSortBy = e => {
    this.props.sortByAction(e.target.name);
  };

  /**
   * @description handle search from user input!
   * @param e
   */
  onHandleSearch = e => {
    this.props.searchOffer(e.target.value);
  };

  render() {
    const { search, error, sortBy, offers, isFetched } = this.props;
    const noResult = isFetched && offers.length === 0;
    return (
      <>
        {!isFetched && !error && (
          <div className={styles.loading}>
            Loading <img src={loader} alt="Loading" />
          </div>
        )}
        {isFetched && (
          <>
            <div className={styles.header}>
              <Search search={search} handleSearch={this.onHandleSearch} />
              <SortButtons handleSort={this.onHandleSortBy} sortBy={sortBy} />
            </div>
            <div className={styles.offers_container}>
              {offers &&
                offers.map(offer => <Offer key={offer.id} {...offer} />)}
            </div>
          </>
        )}
        {(noResult || error) && <Error error={error} noOffer={noResult} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  offers: getOffers(state),
  sortBy: getSort(state),
  error: state.offers.error,
  isFetched: state.offers.isFetched,
});

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => dispatch(fetchOffers()),
  sortByAction: payload => dispatch(sortByAction(payload)),
  searchOffer: offer => dispatch(searchOffer(offer)),
});

Offers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.shape({
        value: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      }),
      sort: PropTypes.shape({
        name: PropTypes.number.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }),
    }),
  ),
  error: PropTypes.string,
  searchOffer: PropTypes.func.isRequired,
  fetchOffers: PropTypes.func.isRequired,
  sortByAction: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers);
