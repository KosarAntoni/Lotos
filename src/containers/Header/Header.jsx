import React, {useState} from "react";
import {CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import logo from "../../Assets/logo.svg"

const Header = ({pathname, slides}) => {

    let [isMenuOpen, setIsMenuOpen] = useState(false);

    const getCurrentPageNumber = () => {
        const rootPath = `/${pathname.split("/")[1]}`;
        const slideIndex = slides.findIndex((slide) => slide.path === rootPath) + 1;
        const pageNumber = slideIndex.toString().length < 2 ? "0" + slideIndex : slideIndex;
        return <SwitchTransition>
            <CSSTransition
                key={pageNumber}
                timeout={{
                    enter: 0,
                    exit: 300
                }}
                classNames={{
                    enter: styles.currentPageEnter,
                    enterDone: styles.currentPage,
                    exit: styles.currentPage,
                    exitActive: styles.currentPageExit
                }}>
                <div className={styles.currentPage}>{pageNumber}</div>
            </CSSTransition>
        </SwitchTransition>
    };

    //awful code check if length length of slides array is more than 2 chars else add 0
    const slidesAmount = slides.length.toString().length < 2 ? `0${slides.length}` : `${slides.length}`;

    const getNextSlideButton = () => {
        //get index of next slide
        const nextSlideIndexItem = slides[slides.findIndex((slide) => slide.path === pathname) + 1];
        //if next slide exist return next slide path else return path to first slide
        const nextSlideData = nextSlideIndexItem ? nextSlideIndexItem : slides[0];
        return <Link to={nextSlideData.path} className={styles.nextPage}>
            <SwitchTransition>
                <CSSTransition
                    key={nextSlideData.name}
                    timeout={{
                        enter: 0,
                        exit: 300
                    }}
                    classNames={{
                        enter: styles.nextPageTextEnter,
                        enterDone: styles.nextPageText,
                        exit: styles.nextPageText,
                        exitActive: styles.nextPageTextEnter
                    }}>
                    <span className={styles.nextPageText}>{nextSlideData.name}</span>
                </CSSTransition>
            </SwitchTransition>
            <div/>
        </Link>;
    };

    const handleOpenMenu = () => {
        if (!isMenuOpen) document.body.querySelector("#slidesWrapper").style.transform = "translateX(15rem)";
        else document.body.querySelector("#slidesWrapper").style.transform = "translateX(0)";
        setIsMenuOpen(!isMenuOpen);
    };

    const menuLinks = slides.map((slide) => <Link to={slide.path} onClick={handleOpenMenu}>{slide.name}</Link>);

    const menu =
        <TransitionGroup component={null}>
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
            <Link to={slides[0].path} className={styles.logo}>
                <img src={logo} alt=""/>
            </Link>
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
                {getCurrentPageNumber()}
                <div className={styles.pagesAmount}>- {slidesAmount}</div>
            </div>
            {getNextSlideButton()}
        </div>
    );
};

export default Header;