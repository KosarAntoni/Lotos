import React, {useState, useEffect, Fragment} from "react";
import styles from "./Classes.module.css"
import i02 from "../../Assets/02.png"
import {CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

const yogaClassesData = [
    {
        title: "For beginners",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
            "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
            "                    nobis optio sunt, velit."]

    },
    {
        title: "Ashtanga vinyasa",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit."]
    },
    {
        title: "Universal",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit."]
    },
    {
        title: "Kundalini",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit."]
    },
    {
        title: "Iyengar",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit."]
    },
    {
        title: "Therapy",
        about: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt molestiae porro possimus\n" +
        "                    sunt temporibus! Accusantium architecto, at dicta doloribus eius ex incidunt, minus mollitia nihil\n" +
        "                    nobis optio sunt, velit."]
    }
];

const Classes = () => {

    const [currentVariable, setCurrentVariable] = useState(0);

    const yogaVariables = yogaClassesData.map((classItem, id) => (
            <li key={id}
                className={id === currentVariable ? styles.variableSelected : undefined}
                onClick={() => setCurrentVariable(id)}>
                {classItem.title}
            </li>
        )
    );

    const classInfo =
    <SwitchTransition>
        <CSSTransition
            key={yogaClassesData[currentVariable].title}
            timeout={{
                enter: 0,
                exit: 300
            }}
            classNames={{
                enter: styles.textContainerEnter,
                enterActive: styles.textContainerEnter,
                enterDone: styles.textContainer,
                exit: styles.textContainer,
                exitActive: styles.textContainerExit
            }}>
            <div>
                <h2>{yogaClassesData[currentVariable].title}</h2>
                {yogaClassesData[currentVariable].about.map(item => <p>{item}</p>)}
                <button className={styles.orderButton}>
                    <div className={styles.plusIcon}/>
                    <span>Order online</span>
                </button>
            </div>
        </CSSTransition>
    </SwitchTransition>;

    return (
            <section className={styles.classesSection} id={"classesSection"}>
                <div className={styles.variablesContainer}>
                    <ul className={styles.variables}>
                        {yogaVariables}
                    </ul>
                    <img src={i02} alt=""/>
                </div>
                <div className={styles.informationContainer}>
                    <h1>Yoga-</h1>
                    {classInfo}
                </div>
            </section>
    );
};

export default Classes;