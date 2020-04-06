import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import FishTable from './components/FishTable'
import BugsTable from './pages/Bugs'
import Login from './pages/Login'

function homePage() {
  return <h2><br /><br />Home</h2>;
}
export default function App() {
  const [token, setToken] = useState("")
  return (
    <>
      <BrowserRouter>
        <Navigation/>
          <Route exact path="/">{homePage()}</Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/bugs" component={BugsTable}></Route>
          <Route path="/fish" component={FishTable}></Route>
      </BrowserRouter>
    </>
  );
}