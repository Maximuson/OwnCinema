import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Places from './components/Places/Places';
import FilmsCards from './components/FilmsCards/FilmsCards';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route path="/chosePlace" render={() => (
          <Places places={props.state} />
        )} />

        <Route exact path="/films" render={() => (
          <FilmsCards state={props.state} films={props.state.films}/>
        )} />
      </div>

    </BrowserRouter>

  );

}

export default App;
