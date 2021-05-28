import React from 'react';
import LogoSvg from '../img/covid_tracker_logo.svg';
import SearchSvg from '../img/search_icon.svg';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__innerDiv'>
        {/* Logo */}
        <img src={LogoSvg} alt='Logo' className='header__logo' />
        {/* Searchbar */}
        {/* <div className="header__search">
          <input type="text" className="header__input" placeholder="Search Countries" />
          <img src={SearchSvg} alt="Search Icon" className="header__searchIcon" />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
