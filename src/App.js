import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DashboardPage from './pages/DashboardPage';
import Sidebar from './pages/Sidebar';
import { DataContext } from './context/DataContext'

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
    <div className="app">
      <Header />
      <main>
        <DashboardPage />
        <Sidebar />
      </main>
      <Tabs view="dashboard" />
    </div >
  );
}

export default App;
