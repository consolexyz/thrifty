import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/sign-in-and-sign-up-page/SignInAndSignUpPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/shop' component={Shop} />
        <Route path = '/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
