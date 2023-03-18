import './App.css';
import {React,useEffect,useState} from 'react';


function App() {
  const intialFormData={ name:"", email: "" , password:"" , rpassword:""}

  const errMsg={ name:"", email: "" , password:"" , rpassword:""}

  const [form,setForm]=useState(intialFormData);

  const [isValid,setValid]=useState(true);

  const [error,setError]=useState(intialFormData);
  
  const onFormDataChange=(e)=>{

    const {id, value}= e.target;
    setForm({...form,[id]: value.trim()});
 
    chkError({...form,[id]: value.trim()});
  }

  const chkError=(form)=>{
    console.log(form.name.length)
    if(!form.name || form.name.length <= 3){
      setError({...errMsg, name: "name is required"})
    }
    else{
      setError({...errMsg})
      setValid(false);
    }

  }

  function submitUser(event){
   
  }

  return (
    <div className="App">
      <h1>Register:</h1>
      <form>
      
        <div className="text-field">
          <label htmlFor='name'>Username:</label>
          <input type="text" id="name" value={form.name} placeholder="Enter your Name"
          onChange={onFormDataChange} required/>
          <span style={{color: 'red'}}>{error.name}</span>
        </div>

       <div className="text-field">
          <label for="email">Email:</label>
          <input type="text" id="email" value={email} placeholder="youlooknice@gmail.com" 
          onChange={(e) => setEmail(e.target.value)}/>
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
