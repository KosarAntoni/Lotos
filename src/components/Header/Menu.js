import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Menu = ({ slides, handleOpenMenu, isMenuOpen }) => {
  const menuLinks = slides.map((slide) => (
    <Link
      key={slide.name}
      to={slide.path}
      onClick={handleOpenMenu}
    >
      {slide.name}
    </Link>
  ));

  return (
    <TransitionGroup component={null}>
      {isMenuOpen && (
        <CSSTransition
          timeout={{
            enter: 0,
            exit: 300,
          }}
          classNames={{
            enter: styles.menuEnter,
            enterActive: styles.menuEnter,
            enterDone: styles.menu,
            exit: styles.menu,
            exitActive: styles.menuEnter,
          }}
        >
          <nav>
            <div className={styles.menuWrapper}>
              {menuLinks}
            </div>
          </nav>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

Menu.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    ),
  ).isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
};

Menu.defaultProps = {
  isMenuOpen: false,
};

export default Menu;
