import styled from 'styled-components';

export const NavbarTag = styled.nav`
  width:100vw;
  height: ${props => props.height};
  background-color: ${props => props.bgcolor};

  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

`;

export const Logo = styled.img`
  width: ${props => props.width};
  height:${props => props.height};
`;

export const Menu = styled.ul`
  display:flex;
  flex-direction:row;
  
`;

export const MenuItem = styled.li`
list-style:none;
`;


export const MobileMenuButton = styled.button`
`;

export const MobileMenu = styled.ul`

`;