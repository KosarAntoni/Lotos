import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Classes from './components/Classes';
import Contact from './components/Contact';
import OrderForm from './components/OrderForm';
import SeasonTickets from './components/SeasonTickets';

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

const App = () => (
  <BrowserRouter>
    <div className={styles.App}>
      <Route path="/" render={() => <Header slides={slides} />} />
      <div id="slidesWrapper" className={styles.slidesWrapper}>
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

export default App;
