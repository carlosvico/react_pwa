import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobre" onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle} >Portfólio</SidebarLink>
          <SidebarLink to="contato" onClick={toggle} >Contato</SidebarLink>
          <SidebarLink to="registrese" onClick={toggle} >Registrar-se</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/entrar">Entrar</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
