import React, { useContext, useEffect } from 'react';
import BarChart from '../components/PieChart';
import { DataContext } from '../context/DataContext';
import { calculatePercentage } from '../utils';
import './AnalyticsPage.css';

function AnalyticsPage() {
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

  useEffect(() => {
    console.log('Analyical Page====>>>', selectedCountryIndex);
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

  return (
    <div className='analytics'>
      <div className='analytics-charts-container'>
        <BarChart
          heading='Cases Breakdown'
          chartData={{
            active: { data: selectedCountryData.active, color: '#36A2EB' },
            deaths: { data: selectedCountryData.deaths, color: '#FF4069' },
            critical: { data: selectedCountryData.critical, color: '#22CFCF' },
          }}
        />
        <BarChart
          heading='Cases vs Deaths'
          chartData={{
            cases: { data: selectedCountryData.cases, color: '#22CFCF' },
            deaths: { data: selectedCountryData.deaths, color: '#FF4069' },
          }}
        />
        <BarChart
          heading='Affected Population'
          chartData={{
            population: {
              data: selectedCountryData.population,
              color: '#36A2EB',
            },
            affected: {
              data: selectedCountryData.cases,
              color: '#22CFCF',
            },
          }}
        />
        <BarChart
          heading='Population Vs Test Conducted'
          chartData={{
            population: {
              data: selectedCountryData.population,
              color: '#36A2EB',
            },
            tests: { data: selectedCountryData.tests, color: '#FF4069' },
          }}
        />
      </div>
      {/* <pre
        style={{
          fontSize: '24px',
          textAlign: 'left',
        }}
      >
        {JSON.stringify(selectedCountryData, null, 2)}
      </pre> */}
    </div>
  );
}

export default AnalyticsPage;
