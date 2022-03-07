import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import  {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user-action";

class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}= this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }

      setCurrentUser(userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
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
  
}

const mapDispatchProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchProps ) (App);
