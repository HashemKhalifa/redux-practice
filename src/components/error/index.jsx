import React from 'react';
import styles from './error.scss';

const Error = ({ error, noOffer }) => (
  <>
    {error && (
      <p className={styles.error}>
        {/* error.message */}
        Sorry something went wrong, Kindly try again later!
      </p>
    )}
    {noOffer && !error && (
      <p className={styles.error}>
        Ops seems there is no result for this query!, Kindly try again with
        different criteria!
      </p>
    )}
  </>
);

export default Error;
