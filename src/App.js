import React from 'react';
import './App.css';
import Header from './components/Header';
import Stats from './components/Stats';
import Country from './components/Country';
import Tabs from './components/Tabs';

function App() {
  const [scrollHeight, setScrollHeight] = React.useState();

  const tryScrolling = e => {
    let element = e.target;
    if (element.scrollTop > 50)
      setScrollHeight(true);
    else
      setScrollHeight(false);
    // console.log(element.scrollTop, "HELLO___________")
  }
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <main>
        {/* MAINBODY⬅️ */}
        <div className="mainContent">
          {/* --First Row */}
          <div className="simpleRow">
            {/* ------Cases */}
            <Stats
              heading="Cases"
              number="200k"
              bottomLine="+230 cases today"
            />
            {/* ------Recovertarted */}
            <Stats
              heading="Recovered"
              number="200k"
              bottomLine="+230 cases today"
            />
            {/* ------Deaths */}
            <Stats
              heading="Deaths"
              number="200k"
              bottomLine="+230 cases today"
            />
          </div>

          {/* --Second Row */}
          <div className="bigRow">
            <Stats
              heading="Active"
              number="200k"
              bottomLine="+230 cases today"
              progressBar={40}
            />
            {/* ------Critical */}
            <Stats
              heading="Critical"
              number="200k"
              bottomLine="+230 cases today"
              progressBar={20}
            />
          </div>

          {/* --Third Row */}
          <div className="bigRow">
            {/* ------Population */}
            <Stats
              heading="Population"
              number="200k"
              bottomLine="*approximate estimation"
            />
            {/* ------Tests */}
            <Stats
              heading="Tests"
              number="200k"
              bottomLine="+230 cases today"
              progressBar={20}
            />
          </div>

          {/* --Forth Row */}
          <div className="dropDown">
            {/* ------Drop Down */}
            <h2 className="dropDown__heading">Stats per <span>One Million👇</span></h2>
          </div>

          {/* --Fifth Row */}
          <div className="simpleRow">
            {/* ------Cases */}
            <Stats
              heading="Cases"
              number="200k"
              bottomLine="*per one million"
            />
            {/* ------Deaths */}
            <Stats
              heading="Recovered"
              number="200k"
              bottomLine="*per one million"
            />
            {/* ------Recovered */}
            <Stats
              heading="Deaths"
              number="200k"
              bottomLine="*per one million"
            />
          </div>

          {/* --Sixth Row */}
          <div className="bigRow">
            {/* ------Active */}
            <Stats
              heading="Active"
              number="200k"
              bottomLine="+230 cases today"
              progressBar={40}
            />
            {/* ------Critical */}
            <Stats
              heading="Critical"
              number="200k"
              bottomLine="+230 cases today"
              progressBar={40}
            />
          </div>

          <div className="footNote" style={{ marginBottom: "8.8rem" }}>
            <p className="footNote__text">
              Data Powered<br />
              by <a href="https://disease.sh/" target="_blank">disease.sh👍</a>
            </p>
          </div>
        </div>

        {/* SIDEBAR⬅️ */}
        <div className="sidebar">
          {/* --Heading */}
          {
            !scrollHeight ?
              <h1 className="sidebar__heading">Cases by<br />Countries 🌏</h1>
              :
              <div className="dropDown sidebar__block">
                <h2 className="dropDown__heading"><span>Cases</span> by <span>Countries 🌏</span></h2>
              </div>
          }

          {/* --Table */}

          <div
            className="countryList"
            onScroll={tryScrolling}
          >
            <Country
              name="Worldwide"
              cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="USA" cases="4,223,287" />
            <Country name="NO" cases="4,223,287" />
            <div className="footNote">
              <p className="footNote__text" style={{ textAlign: "end" }}>
                Thanks to all the<span /><br /> Frontline Workers🏅
            </p>
            </div>
          </div>
        </div>
      </main>

      <Tabs view="dashboard" />
    </div >
  );
}

export default App;
