import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import Home from "./components/views/Home";

function App()
{
  const onLoginSubmit = (data) => {
    console.log("Login submit:", data);
  };

  const onRegistrationSubmit = (data) => {
    console.log("Login submit:", data);
  };

  return <>
    <LoginForm onSubmit={onLoginSubmit}/>
    <RegistrationForm onSubmit={onRegistrationSubmit}/>
    <Home/>
  </>
}
export default App;
