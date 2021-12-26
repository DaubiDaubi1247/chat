import React from "react"
import logo from "../../../common/img/tg.png"
import styled from 'styled-components'

const Hwrapper = styled.div`
    background: black;
    grid-area: header;
    color:white;
    display: flex;
    justify-content:space-between;
    font-size:22px;
    align-items: center;
    color:white;
`

const LogoDescription = styled.div`
    display:flex;
    align-items:center;
`

const Header = (props) => {
    return (
        <Hwrapper >
            <LogoDescription>
                <img src={logo} alt="" />
                <span>Название</span>
            </LogoDescription>
            
            <div>
                <span>{!props.isLogin ? "login": props.info.login}</span>
            </div> 
            
        </Hwrapper>
    )
}

export default Header