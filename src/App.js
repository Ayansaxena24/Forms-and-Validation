import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: ""};
  const [ formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormValues({...formValues, [name]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
}, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username field is empty!";
    }
    if (!values.email) {
      errors.email = "Email field is empty";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password field is empty";
    } else if (values.password.length < 4) {
      errors.password = "Password must contain more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must contain less than 4 characters";
    }
    return errors;
  };

  return (
    <div className = "container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : ( 
        ""
      )}
      
      <form onSubmit={handleSubmit}> 
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input 
            className='input-field' type="text" 
            name="username" 
            placeholder="Username" 
            value={formValues.username}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input 
            className='input-field' type="text" 
            name="email" 
            placeholder="Email" 
            value={formValues.email}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input 
            className='input-field' type="password" 
            name="password" 
            placeholder="Password" 
            value = {formValues.password}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className='sbmt-btn'>Submit</button>
        </div>
      </form>
    </div>

    // "homepage": "https://Ayansaxena24.github.io/Tic-Tac-Toe",
    // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",
  );
}
export default App