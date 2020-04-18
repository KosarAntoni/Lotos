import React, {useState} from "react";
import styles from "./Classes.module.css"
import i02 from "../../Assets/02.png"
import {CSSTransition, SwitchTransition} from "react-transition-group";
import MediaQuery from "react-responsive";

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
                <div className={styles.textContainer}>
                    <h2>{yogaClassesData[currentVariable].title}</h2>
                    {yogaClassesData[currentVariable].about.map((item, id ) => <p key={id}>{item}</p>)}
                    <button className={styles.orderButton}>
                        <div className={styles.plusIcon}/>
                        <span>Order online</span>
                    </button>
                </div>
            </CSSTransition>
        </SwitchTransition>;

    const handleClassChange = (direction) => {
        switch (direction) {
            case "NEXT": {
                const value = currentVariable + 1;
                if (value <= yogaClassesData.length - 1) setCurrentVariable(value);
                break;
            }
            case "PREV": {
                const value = currentVariable - 1;
                if (value >= 0) setCurrentVariable(value);
                break;
            }
            default: return;
        }
    };

    return (
        <section className={styles.classesSection} id={"classesSection"}>
            <MediaQuery minWidth={501}>
                <div className={styles.variablesContainer}>
                    <ul>
                        {yogaVariables}
                    </ul>
                    <img src={i02} alt=""/>
                </div>
            </MediaQuery>
            <div className={styles.informationContainer}>
                <h1>Yoga-</h1>
                <MediaQuery maxWidth={500}>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.nextClassButton} onClick={() => handleClassChange("PREV")}>Prev</button>
                        <button className={styles.nextClassButton + " " + styles.prevClassButton} onClick={() => handleClassChange("NEXT")}>Next</button>
                    </div>
                </MediaQuery>
                {classInfo}
            </div>
        </section>
    );
};

export default Classes;