import styles from './styles.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo ignite" />
      <h1>Ignite</h1>
    </header>
  );
}
