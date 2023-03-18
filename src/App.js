import './App.css';
import { React, useEffect, useState } from 'react';


function App() {
  const intialFormData = { name: "", email: "", password: "", rpassword: "" }

  const errMsg = { name: "", email: "", password: "", rpassword: "" }

  const [form, setForm] = useState(intialFormData);

  const [isValid, setValid] = useState(true);

  const [error, setError] = useState(intialFormData);

  const onFormDataChange = (e) => {

    const { id, value } = e.target;
    setForm({ ...form, [id]: value.trim() });

    chkError({ ...form, [id]: value.trim() });
  }

  const chkError = (form) => {
    let newErr={...errMsg};
    setValid(true);
    if (!form.name || form.name.length <= 3) {

      newErr.name=("name is required");

    }
    if (!form.email || form.email.length <= 3) {

      newErr.email=("Email is required");

    }
      
    setError({ ...newErr })

  }

  function submitUser(event) {

  }

  return (
    <div className="App">
      <h1>Register:</h1>
      <form>

        <div className="text-field">
          <label htmlFor='name'>Username:</label>
          <input type="text" id="name" value={form.name} placeholder="Enter your Name"
            onChange={onFormDataChange} required />
          <span style={{ color: 'red' }}>{error.name}</span>
        </div>
    <br />
    <br />
        <div className="text-field">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={form.email} placeholder="youlooknice@gmail.com"
            onChange={onFormDataChange} required />
          <span style={{ color: 'red' }}>{error.email}</span>
        </div>

        {/* <div className="text-field">
          <label for="pwd">Password:</label>
          <input type="password" id="pwd" value={pwd} placeholder="shh..."
          onChange={(e) => setPwd(e.target.value)} />
        </div>

        <div className="text-field">
          <label for="rpwd">Confirm Password:</label>
          <input type="password" id="rpwd" value={rpwd} placeholder="shh..." 
          onChange={(e) => setRpwd(e.target.value)}/>
        </div>  */}

        <div className="button-area">
          <button type="submit" disabled={isValid}>Register</button>

        </div>

      </form>
    </div>
  );
}

export default App;
