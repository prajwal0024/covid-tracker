import React, { useContext, useEffect, useState } from 'react';
import Stats from '../components/Stats';
import './DashboardPage.css';
import { DataContext } from '../context/DataContext';
import { calculatePercentage, prettyPrintStat } from '../utils';

function DashboardPage() {
  //Global States
  const {
    countriesState,
    worldwideState,
    countryIndexState,
    countryDataState,
  } = useContext(DataContext);
  const [apiCountriesData] = countriesState;
  const [apiWorldwideData] = worldwideState;
  const [selectedCountryIndex] = countryIndexState;
  const [selectedCountryData, setSelectedCountryData] = countryDataState;

  //State
  const [dropDownIndex, setDropDownIndex] = useState(1);
  // const numberType = ['ten million', 'one million', 'hundred thousand'];
  const numberType = {
    10: 'ten million',
    1: 'one million',
    0.1: 'hundred thousand',
  };

  useEffect(() => {
    console.log('Dashboard====>>>', selectedCountryIndex);
    if (selectedCountryIndex === -1) {
      setSelectedCountryData({
        cases: apiWorldwideData.cases,
        todayCases: apiWorldwideData.todayCases,
        recovered: apiWorldwideData.recovered,
        todayRecovered: apiWorldwideData.todayRecovered,
        deaths: apiWorldwideData.deaths,
        todayDeaths: apiWorldwideData.todayDeaths,
        active: apiWorldwideData.active,
        activePercentage: calculatePercentage(
          apiWorldwideData.active,
          apiWorldwideData.cases
        ),
        critical: apiWorldwideData.critical,
        criticalPercentage: calculatePercentage(
          apiWorldwideData.critical,
          apiWorldwideData.active
        ),
        population: apiWorldwideData.population,
        tests: apiWorldwideData.tests,
        testsPercentage: calculatePercentage(
          apiWorldwideData.tests,
          apiWorldwideData.population
        ),

        casesPerOneMillion: apiWorldwideData.casesPerOneMillion,
        recoveredPerOneMillion: apiWorldwideData.recoveredPerOneMillion,
        deathsPerOneMillion: apiWorldwideData.deathsPerOneMillion,
        activePerOneMillion: apiWorldwideData.activePerOneMillion,
        activePerOneMillionPercentage: calculatePercentage(
          apiWorldwideData.activePerOneMillion,
          apiWorldwideData.casesPerOneMillion
        ),
        criticalPerOneMillion: apiWorldwideData.criticalPerOneMillion,
        criticalPerOneMillionPercentage: calculatePercentage(
          apiWorldwideData.criticalPerOneMillion,
          apiWorldwideData.activePerOneMillion
        ),
      });
    } else {
      const tempObject = apiCountriesData[selectedCountryIndex];
      setSelectedCountryData({
        cases: tempObject.cases,
        todayCases: tempObject.todayCases,
        recovered: tempObject.recovered,
        todayRecovered: tempObject.todayRecovered,
        deaths: tempObject.deaths,
        todayDeaths: tempObject.todayDeaths,
        active: tempObject.active,
        activePercentage: calculatePercentage(
          tempObject.active,
          tempObject.cases
        ),
        critical: tempObject.critical,
        criticalPercentage: calculatePercentage(
          tempObject.critical,
          tempObject.active
        ),
        population: tempObject.population,
        tests: tempObject.tests,
        testsPercentage: calculatePercentage(
          tempObject.tests,
          tempObject.population
        ),

        casesPerOneMillion: tempObject.casesPerOneMillion,
        recoveredPerOneMillion: tempObject.recoveredPerOneMillion,
        deathsPerOneMillion: tempObject.deathsPerOneMillion,
        activePerOneMillion: tempObject.activePerOneMillion,
        activePerOneMillionPercentage: calculatePercentage(
          tempObject.activePerOneMillion,
          tempObject.casesPerOneMillion
        ),
        criticalPerOneMillion: tempObject.criticalPerOneMillion,
        criticalPerOneMillionPercentage: calculatePercentage(
          tempObject.criticalPerOneMillion,
          tempObject.activePerOneMillion
        ),
      });
    }
  }, [apiWorldwideData, selectedCountryIndex]);

  const dropDownClicked = () => {
    console.log('CLICKED......!!');
    if (dropDownIndex === 1) {
      setDropDownIndex(0.1);
    } else if (dropDownIndex === 0.1) {
      setDropDownIndex(10);
    } else {
      setDropDownIndex(1);
    }
  };

  return (
    <div className='dashBoard'>
      {/* --First Row */}
      <div className='simpleRow'>
        {/* ------Cases */}
        <Stats
          heading='Cases'
          number={prettyPrintStat(selectedCountryData.cases) || '--'}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayCases} cases today`
              : '-- cases today'
          }
        />
        {/* ------Recovered */}
        <Stats
          heading='Recovered'
          number={prettyPrintStat(selectedCountryData.recovered) || '--'}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayRecovered} cases today`
              : '-- cases today'
          }
        />
        {/* ------Deaths */}
        <Stats
          heading='Deaths'
          number={prettyPrintStat(selectedCountryData.deaths) || '--'}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayDeaths} cases today`
              : '-- cases today'
          }
        />
      </div>

      {/* --Second Row */}
      <div className='bigRow'>
        <Stats
          heading='Active'
          number={prettyPrintStat(selectedCountryData.active) || '--'}
          progressBar={selectedCountryData.activePercentage}
        />
        {/* ------Critical */}
        <Stats
          heading='Critical'
          number={prettyPrintStat(selectedCountryData.critical) || '--'}
          progressBar={selectedCountryData.criticalPercentage}
        />
      </div>

      {/* --Third Row */}
      <div className='bigRow'>
        {/* ------Population */}
        <Stats
          heading='Population'
          number={prettyPrintStat(selectedCountryData.population) || '--'}
          bottomLine='*approximate estimation'
        />
        {/* ------Tests */}
        <Stats
          heading='Tests'
          number={prettyPrintStat(selectedCountryData.tests) || '--'}
          bottomLine='*approximate'
        />
      </div>

      {/* --Forth Row */}
      <div className='dropDown' onClick={dropDownClicked}>
        {/* ------Drop Down */}
        <h2 className='dropDown__heading'>
          Stats per <span>{numberType[dropDownIndex]}👇</span>
        </h2>
      </div>

      {/* --Fifth Row */}
      <div className='simpleRow'>
        {/* ------Cases */}
        <Stats
          heading='Cases'
          number={
            prettyPrintStat(
              Math.floor(selectedCountryData.casesPerOneMillion * dropDownIndex)
            ) || 0
          }
          bottomLine={`*per ${numberType[dropDownIndex]}`}
        />
        {/* ------Deaths */}
        <Stats
          heading='Recovered'
          number={
            prettyPrintStat(
              Math.floor(
                selectedCountryData.recoveredPerOneMillion * dropDownIndex
              )
            ) || 0
          }
          bottomLine={`*per ${numberType[dropDownIndex]}`}
        />
        {/* ------Recovered */}
        <Stats
          heading='Deaths'
          number={
            prettyPrintStat(
              Math.floor(
                selectedCountryData.deathsPerOneMillion * dropDownIndex
              )
            ) || 0
          }
          bottomLine={`*per ${numberType[dropDownIndex]}`}
        />
      </div>

      {/* --Sixth Row */}
      <div className='bigRow'>
        {/* ------Active */}
        <Stats
          heading='Active'
          number={
            prettyPrintStat(
              Math.floor(
                selectedCountryData.activePerOneMillion * dropDownIndex
              )
            ) || 0
          }
          progressBar={selectedCountryData.activePerOneMillionPercentage}
        />
        {/* ------Critical */}
        <Stats
          heading='Critical'
          number={
            prettyPrintStat(
              Math.floor(
                selectedCountryData.criticalPerOneMillion * dropDownIndex
              )
            ) || 0
          }
          progressBar={selectedCountryData.criticalPerOneMillionPercentage}
        />
      </div>

      <div className='footNote' style={{ marginBottom: '8.8rem' }}>
        <p className='footNote__text'>
          Data Powered
          <br />
          by{' '}
          <a href='https://disease.sh/' target='_blank'>
            disease.sh👍
          </a>
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;
