import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const PageCounter = ({ slideIndex, slidesAmount }) => (
  <div className={styles.pageCounter}>
    <SwitchTransition>
      <CSSTransition
        key={slideIndex}
        timeout={{
          enter: 0,
          exit: 300,
        }}
        classNames={{
          enter: styles.currentPageEnter,
          enterDone: styles.currentPage,
          exit: styles.currentPage,
          exitActive: styles.currentPageExit,
        }}
      >
        <div className={styles.currentPage}>{slideIndex < 10 ? `0${slideIndex}` : slideIndex}</div>
      </CSSTransition>
    </SwitchTransition>
    <div className={styles.pagesAmount}>
      -
      {slidesAmount < 10 ? `0${slidesAmount}` : `${slidesAmount}`}
    </div>
  </div>
);

PageCounter.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  slidesAmount: PropTypes.number.isRequired,
};

export default PageCounter;
