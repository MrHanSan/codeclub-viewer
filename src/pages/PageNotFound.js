import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './PageNotFound.scss';

const NotFound = () => {
  return (
    <div className={styles.center}>
      <h3>Noe gikk galt.</h3>
      <p>Siden du leter etter klarer vi ikke å finne.</p>
      <p>(404)</p>
    </div>
  );
};

export default (withStyles(styles)(NotFound));
