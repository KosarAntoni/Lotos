import React from "react";
import styles from "./Header.module.css"
import logo from "../../Assets/logo.svg"

let Header = () => {
    return(
        <div className={styles.headerContainer}>
            <button className={styles.menuButton}>
                <div className={styles.menuIcon}>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                </div>menu</button>
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