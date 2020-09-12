import React, { useContext, useEffect } from 'react'
import Stats from '../components/Stats'
import './DashboardPage.css'
import { DataContext } from '../context/DataContext'

function DashboardPage() {

  const {
    countriesState, worldwideState, countryIndexState, countryDataState
  } = useContext(DataContext);
  const [apiCountriesData,] = countriesState;
  const [apiWorldwideData,] = worldwideState;
  const [selectedCountryIndex,] = countryIndexState;
  const [selectedCountryData, setSelectedCountryData] = countryDataState;

  useEffect(() => {
    console.log("Dashboard====>>>", selectedCountryIndex)
    if (selectedCountryIndex === -1) {
      setSelectedCountryData({
        cases: apiWorldwideData.cases,
        todayCases: apiWorldwideData.todayCases,
        recovered: apiWorldwideData.recovered,
        todayRecovered: apiWorldwideData.todayRecovered,
        deaths: apiWorldwideData.deaths,
        todayDeaths: apiWorldwideData.todayDeaths,
        active: apiWorldwideData.active,
        critical: apiWorldwideData.critical,
        population: apiWorldwideData.population,
        tests: apiWorldwideData.tests,

        casesPerOneMillion: apiWorldwideData.casesPerOneMillion,
        recoveredPerOneMillion: apiWorldwideData.recoveredPerOneMillion,
        deathsPerOneMillion: apiWorldwideData.deathsPerOneMillion,
        activePerOneMillion: apiWorldwideData.activePerOneMillion,
        criticalPerOneMillion: apiWorldwideData.criticalPerOneMillion,
      });
    }
    else {
      const tempObject = apiCountriesData[selectedCountryIndex]
      setSelectedCountryData({
        cases: tempObject.cases,
        todayCases: tempObject.todayCases,
        recovered: tempObject.recovered,
        todayRecovered: tempObject.todayRecovered,
        deaths: tempObject.deaths,
        todayDeaths: tempObject.todayDeaths,
        active: tempObject.active,
        critical: tempObject.critical,
        population: tempObject.population,
        tests: tempObject.tests,

        casesPerOneMillion: tempObject.casesPerOneMillion,
        recoveredPerOneMillion: tempObject.recoveredPerOneMillion,
        deathsPerOneMillion: tempObject.deathsPerOneMillion,
        activePerOneMillion: tempObject.activePerOneMillion,
        criticalPerOneMillion: tempObject.criticalPerOneMillion,
      });
    }
  }, [apiWorldwideData, selectedCountryIndex])

  return (
    <div className="dashBoard">
      {/* --First Row */}
      <div className="simpleRow">
        {/* ------Cases */}
        <Stats
          heading="Cases"
          number={selectedCountryData.cases || "--"}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayCases} cases today`
              : "-- cases today"
          }
        />
        {/* ------Recovertarted */}
        <Stats
          heading="Recovered"
          number={selectedCountryData.recovered || "--"}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayRecovered} cases today`
              : "-- cases today"
          }
        />
        {/* ------Deaths */}
        <Stats
          heading="Deaths"
          number={selectedCountryData.deaths || "--"}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayDeaths} cases today`
              : "-- cases today"
          }
        />
      </div>

      {/* --Second Row */}
      <div className="bigRow">
        <Stats
          heading="Active"
          number={selectedCountryData.active || "--"}
          progressBar={40}
        />
        {/* ------Critical */}
        <Stats
          heading="Critical"
          number={selectedCountryData.critical || "--"}
          progressBar={20}
        />
      </div>

      {/* --Third Row */}
      <div className="bigRow">
        {/* ------Population */}
        <Stats
          heading="Population"
          number={selectedCountryData.population || "--"}
          bottomLine="*approximate estimation"
        />
        {/* ------Tests */}
        <Stats
          heading="Tests"
          number={selectedCountryData.tests || "--"}
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
          number={selectedCountryData.casesPerOneMillion || "--"}
          bottomLine="*per one million"
        />
        {/* ------Deaths */}
        <Stats
          heading="Recovered"
          number={selectedCountryData.recoveredPerOneMillion || "--"}
          bottomLine="*per one million"
        />
        {/* ------Recovered */}
        <Stats
          heading="Deaths"
          number={selectedCountryData.deathsPerOneMillion || "--"}
          bottomLine="*per one million"
        />
      </div>

      {/* --Sixth Row */}
      <div className="bigRow">
        {/* ------Active */}
        <Stats
          heading="Active"
          number={selectedCountryData.activePerOneMillion || "--"}
          progressBar={40}
        />
        {/* ------Critical */}
        <Stats
          heading="Critical"
          number={selectedCountryData.criticalPerOneMillion || "--"}
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
  )
}

export default DashboardPage
