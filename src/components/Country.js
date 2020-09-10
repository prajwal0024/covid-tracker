import React from 'react'
import ReactDOM from 'react-dom'
import './Country.css'

const Country = ({ isWorldWide, name, cases }) => {
  return (
    <div className="country">
      <h3 className="country__heading">{name}</h3>
      <hr className="country__line" />
      <h4 className="country__number">{cases}</h4>
    </div>
  )
}

export default Country
