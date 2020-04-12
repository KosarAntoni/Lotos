import React from 'react';
import Header from "./containers/Header/Header";
import "./App.css";
import Welcome from "./containers/Welcome/Welcome";
import Classes from "./containers/Classes/Classes";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Classes/>
    </div>
  );
};

export default App;
