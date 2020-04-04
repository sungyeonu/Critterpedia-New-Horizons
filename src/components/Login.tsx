import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function valdiateForm() {
    return username.length > 0 && password.length > 0
  }

  function handleSubmit(event: MouseEvent) {
    event.preventDefault()
  }
  return (
    <div>
      <Container>
        <Button color="primary">
          Submit
        </Button>
      </Container>
    </div>
  );
}