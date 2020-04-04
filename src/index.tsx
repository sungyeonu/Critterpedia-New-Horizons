import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import App from './App';
import FishTable from './components/FishTable'
import BugsTable from './components/BugsTable'
import Login from './components/Login'
import Navigation from './components/Navigation';

const routing = (
  <BrowserRouter>
    <div>
    <Route path="/" component={Navigation}></Route>
      <Route exact path="/" component={App}></Route>
      {/* <Route path="/home" component={App}></Route> */}
      <Route path="/login" component={Login}></Route>
      <Route path="/bugs" component={BugsTable}></Route>
      <Route path="/fish" component={FishTable}></Route>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

