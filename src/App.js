import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import HatsPage from './components/hatspage/HatsPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
