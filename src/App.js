import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Header from "./containers/Header/Header";
import "./App.css";
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
                <Route path="/" render={ (props) => <Header pathname={props.location.pathname} slides={slides}/> } />
                {slides.map( (slide) => <Route key={slide.name} path={slide.path} component={slide.Component}/> )}
                {/*------Redirect if no matches--------*/}
                <Route path="*">
                    <Redirect to="/01"/>
                </Route>
            </div>
        </Router>
    );
};

export default App;
