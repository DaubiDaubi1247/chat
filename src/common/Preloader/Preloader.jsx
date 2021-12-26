import styled from "styled-components"
import image from "./1496.gif"

const WrapperPreloader = styled.div`
    width:100px;
    margin: 0 auto;
`



const Preloader = (props) => {
    return (
        <WrapperPreloader>
            <img src={image} alt="" />
        </WrapperPreloader>
    )
}

export default Preloader