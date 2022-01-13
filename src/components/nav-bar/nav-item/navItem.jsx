import { NavLink } from "react-router-dom"
import React from "react" 
import "./nav-item.scss" 

const NavItem = (props) => {
    return (
        <li className="nav__item">
            <NavLink to={props.target}>{props.section}</NavLink>
        </li>
    )
}

export default NavItem