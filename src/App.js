/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
        <Header />
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        {/* <Route path='/country'>
          <Country/>
        </Route> */}
        <Route path='/country/:countryName'>
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
