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
import SeasonTickets from "./containers/SeasonTickets/SeasonTickets";

const App = () => {

    const slides = [
        {path: "/welcome", name: "Welcome", Component: Welcome, props: "/orderForm" },
        {path: "/classes", name: "Classes", Component: Classes, props: "/seasonTickets" },
        {path: "/orderForm", name: "Order", Component: OrderForm, props: null},
        {path: "/seasonTickets", name: "Tickets", Component: SeasonTickets, props: "/orderForm"},
        {path: "/contact", name: "Contact", Component: Contact, props: null}
    ];

    return (
        <Router>
            <div className="App">
                <Route path="/" render={(props) => <Header pathname={props.location.pathname} slides={slides}/>}/>
                <div id="slidesWrapper">
                    {slides.map((slide) =>
                        <Route key={slide.name} path={slide.path}>
                            {({match, location}) =>
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
                                        <slide.Component data={slide.props} pathname={location.pathname}/>
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
