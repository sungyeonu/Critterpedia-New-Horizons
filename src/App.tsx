import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import Fish from './pages/Fish'
import Bugs from './pages/Bugs'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {
  const [token, setToken] = useState("")
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation/>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/login" component={ Login }></Route>
          <Route path="/bugs" component={ Bugs }></Route>
          <Route path="/fish" component={ Fish }></Route>
      </BrowserRouter>
    </>
  );
}