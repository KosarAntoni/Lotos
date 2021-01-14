import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact';
import OrderForm from './components/OrderForm/OrderForm';
import SeasonTickets from './components/SeasonTickets/SeasonTickets';

const App = () => {
  const slides = [
    {
      path: '/welcome', name: 'Welcome', Component: Welcome, props: '/orderForm',
    },
    {
      path: '/classes', name: 'Classes', Component: Classes, props: '/seasonTickets',
    },
    {
      path: '/seasonTickets', name: 'Tickets', Component: SeasonTickets, props: '/orderForm',
    },
    {
      path: '/orderForm', name: 'Order', Component: OrderForm, props: null,
    },
    {
      path: '/contact', name: 'Contact', Component: Contact, props: null,
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" render={({ location }) => <Header pathname={location.pathname} slides={slides} />} />
        <div id="slidesWrapper">
          {slides.map((slide) => (
            <Route key={slide.name} path={slide.path}>
              {({ match, location }) => (
                <CSSTransition
                  in={match !== null}
                  timeout={{
                    enter: 500,
                    exit: 500,
                  }}
                  classNames={{
                    enter: `${styles.slideEnter} + " " + ${styles.slide}`,
                    enterDone: styles.slide,
                    exit: `${styles.slideExit} + " " + ${styles.slide}`,
                    exitActive: `${styles.slideExitActive} + " " + ${styles.slide}`,
                  }}
                  unmountOnExit
                >
                  <div>
                    <slide.Component data={slide.props} pathname={location.pathname} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
        <Route exact path="/">
          <Redirect to={slides[0].path} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
