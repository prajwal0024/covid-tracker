import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = props => {

  const [apiCountriesData, setApiCountriesData] = useState([]);
  const [apiWorldwideData, setApiWorldwideData] = useState({});
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(-1);
  const [selectedCountryData, setSelectedCountryData] = useState({});

  return (
    <DataContext.Provider
      value={{
        countriesState: [apiCountriesData, setApiCountriesData],
        worldwideState: [apiWorldwideData, setApiWorldwideData],
        countryIndexState: [selectedCountryIndex, setSelectedCountryIndex],
        countryDataState: [selectedCountryData, setSelectedCountryData],
      }}>
      { props.children}
    </DataContext.Provider >
  )
}

