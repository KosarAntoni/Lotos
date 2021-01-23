import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ClassInfo = ({ yogaClassesData, currentVariable, link }) => (
  <SwitchTransition>
    <CSSTransition
      key={yogaClassesData[currentVariable].title}
      timeout={{
        enter: 0,
        exit: 300,
      }}
      classNames={{
        enter: styles.textContainerEnter,
        enterActive: styles.textContainerEnter,
        enterDone: styles.textContainer,
        exit: styles.textContainer,
        exitActive: styles.textContainerExit,
      }}
    >
      <div className={styles.textContainer}>
        <h2>{yogaClassesData[currentVariable].title}</h2>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {yogaClassesData[currentVariable].about.map((item, i) => <p key={`${item}${i}`}>{item}</p>)}
        <Link to={link} className={styles.orderButton}>
          <div className={styles.plusIcon} />
          <span>Order online</span>
        </Link>
      </div>
    </CSSTransition>
  </SwitchTransition>
);

ClassInfo.propTypes = {
  yogaClassesData: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentVariable: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default ClassInfo;
