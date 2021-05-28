import React, { useState } from 'react';
import './Tabs.css';
import { ReactComponent as DashboardSvg } from '../img/dashboard_icon.svg';
import { ReactComponent as AnalyticsSvg } from '../img/chart__icon.svg';
import { ReactComponent as MapSvg } from '../img/map_icon.svg';
import { ReactComponent as ListSvg } from '../img/list_icon.svg';
import { Link } from 'react-router-dom';

function Tabs() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const linkedClicked = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='tabs'>
      <div className='tabs__container'>
        <Link
          to='/'
          className='tabs__link'
          onClick={() => linkedClicked('dashboard')}
        >
          <div className={`tabs__tab ${activeTab === 'dashboard' && 'active'}`}>
            <DashboardSvg className='tabs__icon' />
            <h5 className='tabs__heading'>
              Dashboard
              <br />
              <span>View</span>
            </h5>
          </div>
        </Link>

        {/* <Link to="/analytics" className="tabs__link" onClick={() => linkedClicked("analytics")}>
          <div className={`tabs__tab ${activeTab === "analytics" && "active"}`}>
            <AnalyticsSvg className="tabs__icon" />
            <h5 className="tabs__heading">Analytics<br /><span>View</span></h5>
          </div>
        </Link> */}

        <Link
          to='/map'
          className='tabs__link'
          onClick={() => linkedClicked('map')}
        >
          <div className={`tabs__tab ${activeTab === 'map' && 'active'}`}>
            <MapSvg className='tabs__icon' />
            <h5 className='tabs__heading'>
              World Map
              <br />
              <span>View</span>
            </h5>
          </div>
        </Link>

        <Link
          to='/sidebar'
          className='tabs__link'
          onClick={() => linkedClicked('list')}
        >
          <div
            className={`tabs__tab tabs__listTab ${
              activeTab === 'list' && 'active'
            } `}
          >
            <ListSvg className='tabs__icon' />
            <h5 className='tabs__heading'>
              Countries
              <br />
              <span>List</span>
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
