import React from 'react';
import PropTypes from 'prop-types';

import style from './offer.scss';

const Offer = ({ name, image, price }) => (
  <div className={style.offer}>
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>
      {price.value} {price.currency}
    </p>
  </div>
);

Offer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default Offer;
