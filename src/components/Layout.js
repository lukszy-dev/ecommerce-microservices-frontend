import Header from './Header';

import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        {children}
      </div>
    </>
  )
}
