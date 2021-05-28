// export const sortCountries = (data) => {
//   let sortedData = data;
//   sortedData.sort((a, b) => {
//     if (a.cases > b.cases) {
//       return -1;
//     }
//     else {
//       return 1;
//     }
//   })
//   return sortedData;
// }
import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';

const casesTypeColors = {
  cases: {
    hex: '#2784F7',
    multiplier: 200,
  },
  recovered: {
    hex: '#009688',
    multiplier: 200,
  },
  deaths: {
    hex: '#c62828',
    multiplier: 1000,
  },
  active: {
    hex: '#558B2F',
    multiplier: 600,
  },
  critical: {
    hex: '#BF360C',
    multiplier: 10000,
  },
  tests: {
    hex: '#F57F17',
    multiplier: 50,
  },
};

export const sortCountries = (data) => data.sort((a, b) => a.cases < b.cases);

export const calculatePercentage = (number, totalNumber) => {
  return Math.ceil((number / totalNumber) * 100);
};

export const prettyPrintStat = (stat) =>
  stat ? `${numeral(stat).format('0.[0]a')}` : '--';

export const showDataOnMap = (data, casesTypes = 'cases') => {
  console.log(data);
  return data.map((current) => (
    <Circle
      center={[current.countryInfo.lat, current.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesTypes].hex}
      fillColor={casesTypeColors[casesTypes].hex}
      radius={
        Math.sqrt(current[casesTypes]) * casesTypeColors[casesTypes].multiplier
      }
    />
  ));
};
