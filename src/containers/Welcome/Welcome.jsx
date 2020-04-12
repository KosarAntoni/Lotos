import React from "react";
import styles from "./Welcome.module.css";
import i01 from "../../Assets/01.png";

const Welcome = () => {
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

                <button className={styles.inviteButton}>
                    <div className={styles.plusIcon}/>
                    <span>Check our free trial lesson</span>
                </button>
            </div>
        </section>
    );
};

export default Welcome;