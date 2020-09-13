import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DashboardPage from './pages/DashboardPage';
import Sidebar from './pages/Sidebar';
import { DataContext } from './context/DataContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import MapPage from './pages/MapPage';
import AnalyticsPage from './pages/AnalyticsPage';


function App() {

  const {
    countriesState, worldwideState
  } = useContext(DataContext);
  const [, setApiCountriesData] = countriesState;
  const [, setApiWorldwideData] = worldwideState;

  useEffect(() => {
    Promise.all([
      fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json()),
      fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
    ]).then(([responseOne, responseTwo]) => {
      setApiWorldwideData(responseOne);
      setApiCountriesData(responseTwo);
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" exact><DashboardPage /></Route>
            <Route path="/map" exact><MapPage /></Route>
            <Route path="/analytics" exact><AnalyticsPage /></Route>
            <Route path="/sidebar" exact><Sidebar onlySidebar /></Route>
          </Switch>
          <Sidebar fixedSidebar />
        </main>
        <Tabs />
      </div >
    </Router>
  );
}

export default App;
