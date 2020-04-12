import React from "react";
import styles from "./Classes.module.css"
import i02 from "../../Assets/02.png"

const Classes = () => {
    return (
        <section className={styles.classesSection} id={"classesSection"}>
            <div className={styles.variablesContainer}>
                <ul className={styles.variables}>
                    <li className={styles.variableSelected}>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <img src={i02} alt=""/>
            </div>
            <div className={styles.informationContainer}>
                <h1>Yoga-</h1>
                <h2>Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus
                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil
                    nobis optio sunt, velit.
                </p>
                <button className={styles.orderButton}>
                    <div className={styles.plusIcon}/>
                    <span>Order online</span>
                </button>
            </div>
        </section>
    );
};

export default Classes;