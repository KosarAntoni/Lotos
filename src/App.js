import React from 'react';
import Header from "./containers/Header/Header";
import "./App.css";
import Welcome from "./containers/Welcome/Welcome";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
    </div>
  );
};

export default App;
