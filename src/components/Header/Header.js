import React from 'react';
import './Header.scss';
import siteLogo from "../../assets/img/logo.png";
import Menu from '../common/Menu/Menu';
import Search from '../common/Search/Search';

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header__left"}>
        <img className={"header__logo logo"} src={siteLogo} alt="logo"/>
        <Menu></Menu>
      </div>
      <div className={"header__search"}>
        <Search></Search>
      </div>

    </header>
  )
}

export default Header;