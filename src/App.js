import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from "react-hook-form"; 
import "./App.css";

function App() {

  const { register, handleSubmit, errors} = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className = "container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={() => handleSubmit(onSubmit)}> 
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            {...register("message",{ required: "Username is required", })}
            />
          </div>
          <p>{errors?.email?.message}</p>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            {...register("message",
            { required: "Email is required",
              pattern: 
              {
                value: /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g, 
                message:"This is not a valid email"
              }
            }
            )}/>
           <p>{errors?.email?.message}</p>
          </div>
          <div className="field">
            <label>Password</label>
            <input 
            type="password" 
            name="Password" 
            placeholder="Password" 
            {...register("message",
            { required: "Password is required",
              minLength:
              {
                value:4,
                message:"Password must contain more than 4 characters"},
              maxLength:
              {
                value:10,
                message:"Password cannot contain more than 10 words"
              },
            }
            )}/>
           <p>{errors?.email?.message}</p>
          </div>
          <button className='sbmt-btn'>Submit</button>
        </div>

      </form>
    </div>
  )
}
export default App