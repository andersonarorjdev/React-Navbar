import styled from 'styled-components';

export const NavbarTag = styled.nav`
    background-color:${props => props.bgcolor};
    width:100%;
    height: ${props => props.height};

    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const Menu = styled.ul`
    display:flex;
    flex-direction:row;
`;

export const MenuItem = styled.li`
    list-style:none;
    padding:20px;
`;

export const Logo = styled.img`
    width:40px;
    height:40px;

`;

export const MobileMenu = styled.div`
    display: ${props => props.show ? true : 'none'};
`;

export const MobileButton = styled.div`
      display: ${props => props.show ? true : 'none'};
`;

