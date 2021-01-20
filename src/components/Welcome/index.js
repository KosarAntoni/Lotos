import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import i01 from '../../Assets/01.png';

const Welcome = ({ data }) => (
  <section className={styles.welcomeSection} id="welcomeSection">
    <div className={styles.imageContainer}>
      <img src={i01} alt="" />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <span>Yoga center</span>
        <h1>Lotos</h1>
      </div>

      <Link to={data} className={styles.inviteButton}>
        <div className={styles.plusIcon} />
        <span>Check our free trial lesson</span>
      </Link>
    </div>
  </section>
);

Welcome.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Welcome;
