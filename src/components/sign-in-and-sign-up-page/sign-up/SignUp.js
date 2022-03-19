import React  from "react";
import { useState, useContext } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../../custombutton/CustomButton";
import { UserContext } from "../../../context/user-context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../firebase/firebase.utils';

import './SignUp.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

        return(
            <div className="sign-up">
                <h2 className=" title"> I do not have a account</h2>
                <span> Sign up with  your email and password</span>
                <form className=" sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                    type ='text'
                    name = 'displayName'
                    value={displayName}
                    onChange= {handleChange}
                    label = "Display Name"
                    required
                    />

                      
                    <FormInput
                    type ='email'
                    name = 'email'
                    value={email}
                    onChange= {handleChange}
                    label = "Email"
                    required
                    />

                
                      
                    <FormInput
                    type ='password'
                    name = 'password'
                    value={password}
                    onChange= {handleChange}
                    label = "Password"
                    required
                    />

                   
                      
                    <FormInput
                    type ='password'
                    name = 'confirmPassword'
                    value={confirmPassword}
                    onChange= {handleChange}
                    label = "Confirm Password"
                    required
                    />
                    
                    <CustomButton type = "submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

export default SignUp