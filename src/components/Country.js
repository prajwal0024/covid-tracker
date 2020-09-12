import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import './Country.css'
import { DataContext } from '../context/DataContext'

const Country = ({ name, cases, listId }) => {

  const { countryIndexState } = useContext(DataContext);
  const [selectedCountryIndex, setSelectedCountryIndex] = countryIndexState;

  const countryClicked = e => {
    console.log("Index=====>>>>", listId);
    setSelectedCountryIndex(listId);
  }
  return (
    <div
      className={`country 
      ${listId === selectedCountryIndex && "country__active"}`
      } onClick={countryClicked}>

      <h3 className="country__heading">{name}</h3>
      <hr className="country__line" />
      <h4 className="country__number">{cases}</h4>
    </div>
  )
}

export default Country
