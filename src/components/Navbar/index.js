import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
// import logoc from ('../../images/assi.png');

const Navbar = () => {
  return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Carlos</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='sobre'>Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portfolio'>Portfólio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contato'>Contato</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Registre-se</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
  );
};

export default Navbar;
