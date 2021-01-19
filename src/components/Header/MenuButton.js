import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const MenuButton = ({ handleOpenMenu, isMenuOpen }) => (
  <button
    type="button"
    onClick={() => handleOpenMenu()}
    className={isMenuOpen ? `${styles.menuButton} ${styles.menuOpen}` : styles.menuButton}
  >
    <div className={styles.menuIcon}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
    <span>menu</span>
  </button>
);

MenuButton.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
};

MenuButton.defaultProps = {
  isMenuOpen: false,
};

export default MenuButton;
