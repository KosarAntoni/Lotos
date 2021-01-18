import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../Assets/logo.svg';

const Logo = ({ link }) => (
  <Link to={link} className={styles.logo}>
    <img src={logo} alt="" />
  </Link>
);

Logo.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Logo;
