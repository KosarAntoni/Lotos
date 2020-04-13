import React, {useState} from "react";
import styles from "./Header.module.css"
import logo from "../../Assets/logo.svg"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Header = () => {
    let [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <div><a href="#welcomeSection" onClick={() => handleOpenMenu()}>Main</a></div>
                        <div><a href="#classesSection" onClick={() => handleOpenMenu()}>Classes</a></div>
                    </div>
                </nav>
            </CSSTransition>}
        </TransitionGroup>;

    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <button onClick={() => handleOpenMenu()}
                    className={isMenuOpen ? styles.menuButton + " " + styles.menuOpen : styles.menuButton}>
                <div className={styles.menuIcon}>
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
                <div className={styles.currentPage}>01</div>
                <div className={styles.pagesAmount}>- 09</div>
            </div>
            <div className={styles.nextPage}>
                <span>Classes</span>
                <div/>
            </div>
        </div>
    );
};

export default Header;