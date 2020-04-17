import React, {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import logo from "../../Assets/logo.svg"

const Header = ({pathname, slides}) => {

    let [isMenuOpen, setIsMenuOpen] = useState(false);

    const getCurrentPageNumber = () => {
        switch (pathname) {
            case "/01":
                return "01";
            case "/02":
                return "02";
            default:
                return "00";
        }
    };

    const slidesAmount = `- 0${slides.length}`;

    const getSlidePath = () => {
        //get index 0f next slide
        const nextSlideIndex = slides[slides.findIndex( (slide) => slide.path === pathname ) + 1];
        //if next slide exist return next slide path else return path to first slide
        return nextSlideIndex ? nextSlideIndex.path : slides[0].path;
    };



    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuLinks = slides.map( (slide) => <Link to={slide.path} onClick={handleOpenMenu}>{slide.name}</Link> );

    const menu =
        <TransitionGroup>
            {isMenuOpen && <CSSTransition
                timeout={{
                    enter: 0,
                    exit: 300
                }}
                classNames={{
                    enter: styles.menuEnter,
                    enterActive: styles.menuEnter,
                    enterDone: styles.menu,
                    exit: styles.menu,
                    exitActive: styles.menuEnter
                }}>
                <nav>
                    <div className={styles.menuWrapper}>
                        {menuLinks}
                    </div>
                </nav>
            </CSSTransition>}
        </TransitionGroup>;

    return (
        <div className={styles.headerContainer}>
            <button className={isMenuOpen ? styles.menuButton + " " + styles.menuOpen : styles.menuButton}>
                <div onClick={() => handleOpenMenu()} className={styles.menuIcon}>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                </div>
                <span>menu</span>
            </button>
            {menu}
            <a className={styles.phoneNumber} href={"tel:+12 345 678 901"}>+12 345 678 901</a>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <ul className={styles.socialLinks}>
                <li>
                    <a href="#">vk</a>
                </li>
                <li>
                    <a href="#">fb</a>
                </li>
                <li>
                    <a href="#">inst</a>
                </li>
            </ul>
            <div className={styles.pageCounter}>
                <div className={styles.currentPage}>{getCurrentPageNumber()}</div>
                <div className={styles.pagesAmount}>{slidesAmount}</div>
            </div>
            <Link to={getSlidePath} className={styles.nextPage}>
                <span>Classes</span>
                <div/>
            </Link>
        </div>
    );
};

export default Header;