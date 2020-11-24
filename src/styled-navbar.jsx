import styled from 'styled-components';

export const NavbarTag = styled.nav`
  width:100vw;
  height: ${props => props.height};
  background-color: ${props => props.bgcolor};

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:10px;
  align-items:center;

`;

export const Logo = styled.img`
  width: ${props => props.width};
  height:${props => props.height};
`;

export const Menu = styled.ul`
  display:flex;
  flex-direction:row;

  @media(max-width: ${props => props.hide} ){
      display:none;
  } 
`;

export const MenuItem = styled.li`
list-style:none;
`;

export const MobileMenuButton = styled.button`
  display: none;

@media(max-width:${props => props.show}){

  display:block;
  width:30px;
  height:30px;
}
`;

export const MobileMenuItem = styled.li`
  list-style:none;
`;
