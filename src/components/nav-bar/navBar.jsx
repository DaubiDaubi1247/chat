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
                <NavItem target="News/" section="News"></NavItem>    
                <NavItem target="settings/" section="Settings"></NavItem>
                <NavItem target="films/" section="Films"/>
            </ul>
        </Nav>
    )
}

export default NavBar