//Essentials imports to React;
import React from 'react';

//Imports to styled-components;
import GlobalReset from './styles/reset';
import {NavbarTag} from './styled-navbar';

const Navbar = props =>{
  return(
    <NavbarTag bgcolor="#2221da" height="30vh">
        <GlobalReset />
    </NavbarTag>
  );
}

export default Navbar;