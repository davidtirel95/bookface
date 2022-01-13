import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { Widgets } from "@material-ui/icons";
function App() {
  const user= null;
  return (
    <div className="App">
      {!user ? (
    
    <Login />
      
      ) : (
      <>
        <Header />
        <div className="App_body">  
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
     </>
      )}
     </div>
  ); 
  }
 


export default App;
