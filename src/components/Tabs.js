import React from 'react';
import './Tabs.css';
import { ReactComponent as DashboardSvg } from '../img/dashboard_icon.svg';
import { ReactComponent as AnalyticsSvg } from '../img/chart__icon.svg';
import { ReactComponent as MapSvg } from '../img/map_icon.svg';

function Tabs({ view }) {
  return (
    <div className="tabs">
      <div className="tabs__container">

        <div className={`tabs__tab ${view === "dashboard" && "active"}`}>
          <DashboardSvg className="tabs__icon" />
          <h5 className="tabs__heading">Dashboard<br />View</h5>
        </div>

        <div className={`tabs__tab ${view === "analytics" && "active"}`}>
          <AnalyticsSvg className="tabs__icon" />
          <h5 className="tabs__heading">Analytics<br />View</h5>
        </div>

        <div className={`tabs__tab ${view === "map" && "active"}`}>
          <MapSvg className="tabs__icon" />
          <h5 className="tabs__heading">Full Map<br />View</h5>
        </div>
      </div>
    </div>
  )
}

export default Tabs
