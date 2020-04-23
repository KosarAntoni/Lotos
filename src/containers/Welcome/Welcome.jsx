import React from "react";
import styles from "./Welcome.module.css";
import i01 from "../../Assets/01.png";
import {Link} from "react-router-dom";

const Welcome = ({data}) => {
    return (
        <section className={styles.welcomeSection} id={"welcomeSection"}>
            <div className={styles.imageContainer}>
                <img src={i01} alt=""/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <span>Yoga center</span>
                    <h1>Lotos</h1>
                </div>

                <Link to={data} className={styles.inviteButton}>
                    <div className={styles.plusIcon}/>
                    <span>Check our free trial lesson</span>
                </Link>
            </div>
        </section>
    );
};

export default Welcome;