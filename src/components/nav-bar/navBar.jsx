import NavItem from "./nav-item/navItem"
import React from "react"
import styled from "styled-components"


const Nav = styled.nav`
    grid-area: nav;
    background-color: grey;
    
`

const NavBar = (props) => {
    return (
        <Nav >
            <ul>
                <NavItem target="News/" section="News"/>   
                <NavItem target="messages/" section="Messages"/>
                <NavItem target="films/" section="Films"/>
                <NavItem target="self-control/" section="Self-control"/>
            </ul>
        </Nav>
    )
}

export default NavBar