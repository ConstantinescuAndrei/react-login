import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm/LoginForm.js'
import axios from 'axios'

import './App.css'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const jsonPlaceholder = "http://damp-island-34245.herokuapp.com/get-accounts";
  
  const [apiData, setApiData] = useState(false);
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
  });

  const Login = (details) => {

    async function fetchData() {
      const request = await axios.get(jsonPlaceholder);
      
      setUsers(request.data);
      setApiData(true);
      return request;
    }

    fetchData();
    console.log(users);
    // if(details.email === adminUser.email && details.password === adminUser.password){
    //   console.log("logged in");
    //   setUser({
    //     name: details.name,
    //     email: details.email
    //   });
    // } else {
    //   console.log("Details do not match!");
    //   setError("Details do not match")
    // }
  }

  const Logout = () => {   
    console.log("Logout");

    setUser({
      name: "",
      email: "",
    });
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      {apiData === true ? (
        <div className="welcome">
          {
            users.map(user => {
              return user.title;
            })  
          }
        </div>
      ) : (
        <LoginForm 
          Login={Login} 
          error={error}
          />
      )}
    </div>
  );
}

export default App;
