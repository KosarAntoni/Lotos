import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import styles from './App.module.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Classes from './components/Classes';
import Contact from './components/Contact';
import OrderForm from './components/OrderForm';
import SeasonTickets from './components/SeasonTickets';

const duration = {
  enter: 300,
  exit: 500,
};

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'translateY(50%)',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0%)',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(-50%)',
  },
  exited: {
    opacity: 0,
    transform: 'translateY(-50%)',
  },
};

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

const App = () => {
  const handleWheel = (delta, history) => {
    const slideIndex = slides.findIndex((slide) => slide.path === history.location.pathname);
    const prevSlideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    const nextSlideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
    if (delta > 40 && delta < 50) history.push(slides[nextSlideIndex].path);
    if (delta < -40 && delta > -50) history.push(slides[prevSlideIndex].path);
  };

  return (
    <BrowserRouter>
      <Route
        path="/"
        render={({ history }) => (
          <div
            className={styles.App}
          >

            <Header slides={slides} />
            <div id="slidesWrapper" className={styles.slidesWrapper}>
              {slides.map(({ Component, path, props }) => (
                <Route
                  key={path}
                  path={path}
                >
                  {({ match }) => (
                    <Transition
                      in={match !== null}
                      timeout={duration}
                      mountOnEnter
                      unmountOnExit
                    >
                      {(state) => (
                        <div
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                          }}
                          onWheel={(e) => match !== null && handleWheel(e.deltaY, history)}
                          className={styles.slide}
                        >
                          <Component
                            data={props}
                          />
                        </div>
                      )}
                    </Transition>
                  )}
                </Route>
              ))}
            </div>
            <Route exact path="/">
              <Redirect to={slides[0].path} />
            </Route>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
