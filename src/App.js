import React from 'react';

import './App.css';

import Places from './components/Places/Places';

const App = (props) => {
    return (
     <Places places={props.state}/>
    );
  
}

export default App;
