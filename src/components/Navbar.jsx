//Essentials imports to React
import React from 'react';

//Imports to styled components and custumizations
import {NavbarTag} from './styled-navbar';
import Globalstyle from '../styles/Reset';

const Navbar = props =>{
    return(
            <NavbarTag bgcolor={props.bgcolor}>
                <Globalstyle />
                <h1>testando a navbar</h1>
            </NavbarTag>
    )
}

export default Navbar;