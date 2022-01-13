import React,{useState} from 'react';
import './App.css';
import './style.css';
import LoginForm from './LoginForm';

function App() {
  {/*This is where we are going to store our admin login details   */}
  const adminUser={
    email: "admin@admin.com",
    password:"rajab123",
   

  }
  {/*To get our users details  */}
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  const Login = details =>{
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email
    });
    {

      console.log("Details do not match!");
      setError("Details do not match!");
  }
  
  }

    

  
  const Logout = () =>{
    setUser({name:"", email:""});
    console.log("Logout");
  }

  return (
    <div className="App">
     {/*Run a check to see if the user details:email     are correct */}
     {(user.email !=="" ) ? (<div className="Welcome">
       <h2>Welcome,<span>{user.name}</span></h2>
       <button onClick={Logout}>Logout</button>
       </div>
       ):(
         <LoginForm Login={Login} error={error} /> 
       )};
    </div>
  )
};

export default App;
