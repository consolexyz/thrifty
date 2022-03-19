import React from 'react';
import { useContext } from 'react';
import {  Route, Routes ,Navigate} from 'react-router-dom';
import { UserContext } from './context/user-context';
import './App.css';
import HomePage from './components/homepage/HomePage';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/sign-in-and-sign-up-page/SignInAndSignUpPage';

const App =()=>{
  const { currentUser } = useContext(UserContext);
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route  path='/' element= { <HomePage />}/>
          <Route path='shop' element={<Shop />} />
          <Route path = 'signin' element={ 
            currentUser ? 
            (<Navigate to = '/' />)
             : (<SignInAndSignUpPage />)
             } />
        </Routes>
      </div>
    );
  }

export default App;
