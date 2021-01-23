import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Menu from './Menu';
import SocialLinks from './SocialLinks';
import PageCounter from './PageCounter';
import NextPageButton from './NextPageButton';
import Logo from './Logo';
import MenuButton from './MenuButton';

const Header = ({ slides }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const slideIndex = slides.findIndex((slide) => slide.path === pathname) + 1;
  const nextSlideIndex = slideIndex < slides.length ? slideIndex : 0;

  const handleOpenMenu = () => {
    document.body.querySelector('#slidesWrapper').style.transform = isMenuOpen
      ? null : 'translateX(15rem)';

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <MenuButton handleOpenMenu={handleOpenMenu} isMenuOpen={isMenuOpen} />
      <Menu slides={slides} handleOpenMenu={handleOpenMenu} isMenuOpen={isMenuOpen} />
      <a className={styles.phoneNumber} href="tel:+12 345 678 901">+12 345 678 901</a>
      <Logo link={slides[0].path} />
      <SocialLinks />
      <PageCounter slideIndex={slideIndex} slidesAmount={slides.length} />
      <NextPageButton link={slides[nextSlideIndex].path} text={slides[nextSlideIndex].name} />
    </div>
  );
};

Header.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    ),
  ).isRequired,
};

export default Header;
