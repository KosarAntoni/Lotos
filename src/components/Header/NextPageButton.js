import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './styles.module.css';

const NextPageButton = ({ link, text }) => (
  <Link to={link} className={styles.nextPage}>
    <SwitchTransition>
      <CSSTransition
        key={link}
        timeout={{
          enter: 0,
          exit: 300,
        }}
        classNames={{
          enter: styles.nextPageTextEnter,
          enterDone: styles.nextPageText,
          exit: styles.nextPageText,
          exitActive: styles.nextPageTextEnter,
        }}
      >
        <span className={styles.nextPageText}>{text}</span>
      </CSSTransition>
    </SwitchTransition>
    <div />
  </Link>
);

NextPageButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NextPageButton;
