import React, { useContext, useEffect } from 'react'
import Stats from '../components/Stats'
import './DashboardPage.css'
import { DataContext } from '../context/DataContext'
import { calculatePercentage } from '../utils';

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
        activePercentage: calculatePercentage
          (apiWorldwideData.active, apiWorldwideData.cases),
        critical: apiWorldwideData.critical,
        criticalPercentage: calculatePercentage
          (apiWorldwideData.critical, apiWorldwideData.active),
        population: apiWorldwideData.population,
        tests: apiWorldwideData.tests,
        testsPercentage: calculatePercentage
          (apiWorldwideData.tests, apiWorldwideData.population),

        casesPerOneMillion: apiWorldwideData.casesPerOneMillion,
        recoveredPerOneMillion: apiWorldwideData.recoveredPerOneMillion,
        deathsPerOneMillion: apiWorldwideData.deathsPerOneMillion,
        activePerOneMillion: apiWorldwideData.activePerOneMillion,
        activePerOneMillionPercentage: calculatePercentage
          (apiWorldwideData.activePerOneMillion,
            apiWorldwideData.casesPerOneMillion),
        criticalPerOneMillion: apiWorldwideData.criticalPerOneMillion,
        criticalPerOneMillionPercentage: calculatePercentage
          (apiWorldwideData.criticalPerOneMillion,
            apiWorldwideData.activePerOneMillion),
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
        activePercentage: calculatePercentage
          (tempObject.active, tempObject.cases),
        critical: tempObject.critical,
        criticalPercentage: calculatePercentage
          (tempObject.critical, tempObject.active),
        population: tempObject.population,
        tests: tempObject.tests,
        testsPercentage: calculatePercentage
          (tempObject.tests, tempObject.population),

        casesPerOneMillion: tempObject.casesPerOneMillion,
        recoveredPerOneMillion: tempObject.recoveredPerOneMillion,
        deathsPerOneMillion: tempObject.deathsPerOneMillion,
        activePerOneMillion: tempObject.activePerOneMillion,
        activePerOneMillionPercentage: calculatePercentage
          (tempObject.activePerOneMillion,
            tempObject.casesPerOneMillion),
        criticalPerOneMillion: tempObject.criticalPerOneMillion,
        criticalPerOneMillionPercentage: calculatePercentage
          (tempObject.criticalPerOneMillion,
            tempObject.activePerOneMillion),
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
        {/* ------Recovered */}
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
          progressBar={selectedCountryData.activePercentage}
        />
        {/* ------Critical */}
        <Stats
          heading="Critical"
          number={selectedCountryData.critical || "--"}
          progressBar={selectedCountryData.criticalPercentage}
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
          progressBar={selectedCountryData.testsPercentage}
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
          progressBar={selectedCountryData.activePerOneMillionPercentage}
        />
        {/* ------Critical */}
        <Stats
          heading="Critical"
          number={selectedCountryData.criticalPerOneMillion || "--"}
          progressBar={selectedCountryData.criticalPerOneMillionPercentage}
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
