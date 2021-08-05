import { ReactNode } from 'react';

import styles from './Search.module.scss'

function SearchBar({ ...rest }) {
  return (
  <div className={styles.coin_search_bar}>
    <input className={styles.coin_input} {...rest}/>

  </div>
  );
}

export default SearchBar;
