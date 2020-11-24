//Essentials imports to React;
import React,{useState} from 'react';

//Imports to styled-components;
import styled from 'styled-components';
import GlobalReset from './styles/reset';
import {NavbarTag, Logo, Menu, MenuItem,MobileMenuItem, MobileMenuButton} from './styled-navbar';
import Logoimg from './birthday.png';


const Navbar = props =>{
  const[MobileMenuState, setMobileMenu] = useState(false);
  const MobileMenu = styled.div`
    display:${MobileMenuState ? 'block' : 'none'};
    background-color:red;
    position:absolute;
    width:50vw;
    height:160vh;
  `;
  return(
    <NavbarTag bgcolor="#2221da" height="10vh">
        <GlobalReset />
        <Logo src={Logoimg}></Logo>
        <Menu hide='700px'>
          <MenuItem>
            Item do menu
          </MenuItem>
          <MenuItem>
            Item do menu
          </MenuItem>
          <MenuItem>
            Item do menu
          </MenuItem>
        </Menu>
          <MobileMenu>
              <MobileMenuItem>
                  sdads
              </MobileMenuItem>
          </MobileMenu>
          <MobileMenuButton show='699px' onClick={ () => setMobileMenu(!MobileMenuState)}/>
    </NavbarTag>
  );
}

export default Navbar;