import React, { useContext, useEffect, useState } from 'react';
import './MapPage.css';
import { DataContext } from '../context/DataContext';
import Stats from '../components/Stats';
import { calculatePercentage, prettyPrintStat } from '../utils';
import DataMap from '../components/DataMap';
import 'leaflet/dist/leaflet.css';

function MapPage() {
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
    console.log('MAPPAGE====>>>', selectedCountryIndex);
    if (selectedCountryIndex === -1) {
      setMapCenter({ lat: 34.80746, lng: -40.4796 });
      setMapZoom(3);
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
      setMapCenter({
        lat: tempObject.countryInfo.lat,
        lng: tempObject.countryInfo.long,
      });
      setMapZoom(4);
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

  //Map State
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [dataType, setDataType] = useState('cases');

  //function
  const statsClicked = (c) => {
    setDataType(c);
  };

  return (
    <div className='map'>
      <div className='map__singleRow'>
        {/* ------Cases */}
        <Stats
          onClick={() => statsClicked('cases')}
          active={dataType === 'cases'}
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
          onClick={() => statsClicked('recovered')}
          active={dataType === 'recovered'}
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
          onClick={() => statsClicked('deaths')}
          active={dataType === 'deaths'}
          heading='Deaths'
          number={prettyPrintStat(selectedCountryData.deaths) || '--'}
          bottomLine={
            selectedCountryData.todayCases
              ? `+${selectedCountryData.todayDeaths} cases today`
              : '-- cases today'
          }
        />

        {/* ------Active */}
        <Stats
          onClick={() => statsClicked('active')}
          active={dataType === 'active'}
          heading='Active'
          number={prettyPrintStat(selectedCountryData.active) || '--'}
          progressBar={selectedCountryData.activePercentage}
        />
        {/* ------Critical */}
        <Stats
          onClick={() => statsClicked('critical')}
          active={dataType === 'critical'}
          heading='Critical'
          number={prettyPrintStat(selectedCountryData.critical) || '--'}
          progressBar={selectedCountryData.criticalPercentage}
        />

        {/* ------Tests */}
        <Stats
          onClick={() => statsClicked('tests')}
          active={dataType === 'tests'}
          heading='Tests'
          number={prettyPrintStat(selectedCountryData.tests) || '--'}
          progressBar={selectedCountryData.testsPercentage}
        />
      </div>
      <DataMap
        countriesData={apiCountriesData}
        dataType={dataType}
        center={mapCenter}
        zoom={mapZoom}
      />
    </div>
  );
}

export default MapPage;
