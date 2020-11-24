//Essentials imports to React;
import React from 'react';

//Imports to styled-components;
import GlobalReset from './styles/reset';
import {NavbarTag, Logo} from './styled-navbar';
import Logoimg from './birthday.png';


const Navbar = props =>{
  return(
    <NavbarTag bgcolor="#2221da" height="10vh">
        <GlobalReset />
        <Logo src={Logoimg}></Logo>
    </NavbarTag>
  );
}

export default Navbar;