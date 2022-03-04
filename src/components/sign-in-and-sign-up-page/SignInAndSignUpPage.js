import React from 'react';
import '../sign-in-and-sign-up-page/SignInAndSignUpPage.scss';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

const SignInAndSignUpPage= () =>
  (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
  )
export default SignInAndSignUpPage