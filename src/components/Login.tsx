import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 

  function valdiateForm() {
    return username.length > 0 && password.length > 0
  }

  function handleSubmit(event: any) {
    event.preventDefault()
  }
  return (
    <div>

    </div>
  );
}
