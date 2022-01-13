import NavItem from "./nav-item/navItem"
import React from "react"
import "./nav-bar.scss"



const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <NavItem target="News/" section="News"/>   
                <NavItem target="messages/" section="Messages"/>
                <NavItem target="films/" section="Films"/>
                <NavItem target="self-control/" section="Self-control"/>
            </ul>
        </nav>
    )
}

export default NavBar