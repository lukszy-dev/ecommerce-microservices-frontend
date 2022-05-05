import { FC } from 'react';
import Header from '../Header';

import styles from './Layout.module.css';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
