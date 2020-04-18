import React from 'react';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "./App.css";
import styles from "./App.module.css"
import Header from "./containers/Header/Header";
import Welcome from "./containers/Welcome/Welcome";
import Classes from "./containers/Classes/Classes";

const App = () => {

    const slides = [
        {path: "/01", name: "Welcome", Component: Welcome},
        {path: "/02", name: "Classes", Component: Classes}
    ];

    return (
        <Router>
            <div className="App">
                <Route path="/" render={(props) => <Header pathname={props.location.pathname} slides={slides}/>}/>
                {slides.map((slide) =>
                    <Route key={slide.name} path={slide.path}>
                        {({match}) =>
                            <CSSTransition
                                in={match !== null}
                                timeout={{
                                    exit: 500}}
                                classNames={{
                                    enter: `${styles.slideEnter} + " " + ${styles.slide}`,
                                    enterActive: `${styles.slideEnter} + " " + ${styles.slide}`,
                                    enterDone: styles.slide,
                                    exit: `${styles.slideExit} + " " + ${styles.slide}`,
                                    exitActive: `${styles.slideExitActive} + " " + ${styles.slide}`
                                }}
                                unmountOnExit>
                                <div className={styles.slide}>
                                    <slide.Component/>
                                </div>
                            </CSSTransition>
                        }
                    </Route>
                )}
                {/*------Redirect if no matches--------*/}
                <Route path="*">
                    <Redirect to="/01"/>
                </Route>
            </div>
        </Router>
    );
};

export default App;
