import { NavLink } from "react-router-dom"
import React from "react"  
import styled from "styled-components"

const ListItem = styled.li`
    a {
        color: white;
        text-decoration: none;
    }
    list-style-type: none;
    margin-bottom: 5px;
`

const NavItem = (props) => {
    return (
        <ListItem>
            <NavLink to={props.target}>{props.section}</NavLink>
        </ListItem>
    )
}

export default NavItem