import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Fish from './pages/Fish'
import Bugs from './pages/Bugs'
import Login from './pages/Login'
import Home from './pages/Home'

function renderPage(param: string) {
  switch (param) {
    case "home":
      return <Home/>
    case "bugs":
      return <Bugs/>
    case "fish":
      return <Fish/>
    case "login":
      return <Login/>
  }
}

export default function App() {
  // const [token, setToken] = useState("")
  const [page, setPage] = useState("home")

  return (
    <>
      <Navigation setPage={ setPage }/>
      { renderPage(page) }
    </>
  );
}