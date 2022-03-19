import React from 'react'
import { useState, useContext } from 'react';
import FormInput from '../form-input/FormInput'
import CustomButton from '../../custombutton/CustomButton'
import './SignIn.scss'
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
  } from '../../../firebase/firebase.utils'
import { UserContext } from '../../../context/user-context';
  

const defaultFormFields = {
    email: '',
    password: '',
  };


const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await  signInWithGooglePopup();
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                     name = "email"
                     type= "email" 
                     value={email}
                     requried = "true"
                     handleChange={handleChange}
                     label ="email"
                     />
                    <FormInput 
                    name = "password" 
                    type= "password"
                    value={password} 
                    handleChange={handleChange}
                    requried = "true"
                    label= "password"
                    />
                    <div className='buttons'>
                    <CustomButton type= "submit">SIGN IN </CustomButton>
                    <CustomButton type ="button"  onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                        </div>
                </form>
            </div>
        )
    }

export default SignIn