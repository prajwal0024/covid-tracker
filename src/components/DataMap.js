import React, { useContext } from 'react'
import './DataMap.css'
import { Map as LeafletMap, TileLayer } from "react-leaflet"
import { showDataOnMap } from '../utils'

function DataMap({ countriesData, dataType, center, zoom }) {

  return (
    <div>
      <div className="dataMap">
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* LOOP THROUGH ALL THE COUNTRIES AND DRAW CIRCLE ON THE SCREEN */}
          {showDataOnMap(countriesData, dataType)}
        </LeafletMap>
      </div>
    </div>
  )
}

export default DataMap
