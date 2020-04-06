import React, { useState } from 'react';
import SignIn from '../components/login/SignIn'
import Register from '../components/login/Register'


function handleSubmit(username: string, password: string) {
  console.log("username: ", username, "\n", "password: ", password)
}

export default function Login() { // should these just be local variables
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showSignIn, setShowSignIn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      {
        showSignIn
          ? <SignIn setUsername={setUsername} setPassword={setPassword} setShowSignIn={setShowSignIn} submit={() => handleSubmit(username, password)} /> // maybe do this in its own function
          : <Register setUsername={setUsername} setPassword={setPassword} setShowSignIn={setShowSignIn} submit={() => handleSubmit(username, password)} />
      }
    </>
  );
}