import React from 'react';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "./App.css";
import styles from "./App.module.css"
import Header from "./containers/Header/Header";
import Welcome from "./containers/Welcome/Welcome";
import Classes from "./containers/Classes/Classes";
import Contact from "./containers/Contact/Contact";
import OrderForm from "./containers/OrderForm/OrderForm";

const App = () => {

    const slides = [
        {path: "/Welcome", name: "Welcome", Component: Welcome},
        {path: "/Classes", name: "Classes", Component: Classes},
        {path: "/OrderForm", name: "Order", Component: OrderForm},
        {path: "/Contact", name: "Contact", Component: Contact}
    ];

    return (
        <Router>
            <div className="App">
                <Route path="/" render={(props) => <Header pathname={props.location.pathname} slides={slides}/>}/>
                <div id="slidesWrapper">
                    {slides.map((slide) =>
                        <Route key={slide.name} path={slide.path}>
                            {({match}) =>
                                <CSSTransition
                                    in={match !== null}
                                    timeout={{
                                        enter: 500,
                                        exit: 500}}
                                    classNames={{
                                        enter: `${styles.slideEnter} + " " + ${styles.slide}`,
                                        enterDone: styles.slide,
                                        exit: `${styles.slideExit} + " " + ${styles.slide}`,
                                        exitActive: `${styles.slideExitActive} + " " + ${styles.slide}`
                                    }}
                                    unmountOnExit>
                                    <div>
                                        <slide.Component/>
                                    </div>
                                </CSSTransition>
                            }
                        </Route>
                    )}
                </div>
                {/*------Redirect if no matches--------*/}
                {/*<Route path="*">*/}
                {/*    <Redirect to={slides[0].path}/>*/}
                {/*</Route>*/}
            </div>
        </Router>
    );
};

export default App;
