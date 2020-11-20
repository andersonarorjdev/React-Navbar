//Essentials imports to React
import React from 'react';

//Imports to styled components and custumizations
import {NavbarTag, Menu, MenuItem, Logo, MobileButton, MobileMenu} from './styled-navbar';
import Globalstyle from '../styles/Reset';


import  logo from '../password(1).png';

const Navbar = props =>{
    return(
            <NavbarTag bgcolor={props.bgcolor} height={props.height}>
                <Globalstyle />
               <Logo src={logo} />
                <Menu>
                    <MenuItem>
                        texto
                    </MenuItem>
                    <MenuItem>
                        texto
                    </MenuItem>
                    <MenuItem>
                        texto
                    </MenuItem>
                </Menu>

                <MobileMenu>
                    </MobileMenu>
                <MobileButton />
            </NavbarTag>
    )
}

export default Navbar;