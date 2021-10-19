import React, { useState } from 'react';
import axios from 'axios';

const Signup = props => {
  const email = userSignupInput('');
  const password = userSignupInput('');
  const password2 = userSignupInput('');
  const username = userSignupInput('');
  const [error, setError] = useState(null);

  // const [inputs, handleInputChanges] = userSignupInput({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const validateForm = () => {
  //   return (
  //     inputs.email.length > 0 &&
  //     inputs.password.length > 0 &&
  //     inputs.password === inputs.confirmPassword
  //   );
  // };

  return(
    <div>Signup with your email address<br/><br/>
      <div>
        What is your email? <br/>
        <input type='text' placeholder='Enter your email' {...email}/>
      </div>
      <div style={{marginTop: 10}}>
        Create a password: <br/>
        <input type='text' placeholder='Create a password' {...password}/>
      </div>
      <div style={{marginTop: 10}}>
        Confirm your password<br/>
        <input type='text' placeholder='Confirm your password' {...password}/>
      </div>
      <div style={{marginTop: 10}}>
        What should we call you?<br/>
        <input type='text' placeholder='Create a username' {...username}/>
      </div>
      <div> <br/>
        <input type="button" value="Signup"/>
      </div>
    </div>
  );
};

const userSignupInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};



export default Signup;