import { NavLink,} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    a {
        color:black;
        font-weight:bold;
    }
`

const TitlePage = styled.img`
    max-width:500px;
    max-height:500px;
`

const TitleText = styled.div`
    margin-bottom:10px;
`

const Description = styled.div`
    margin-bottom:5px;
    span {
        font-weight:bold;
    }
`

const Films = (props) => {
    return (
        <Wrapper>
            <NavLink to={`${props.id}`}>
                <TitleText>{props.fullTitle || props.title}</TitleText>
            </NavLink>
            <NavLink to={`${props.id}`}>
                <TitlePage src={props.image} alt="" />
            </NavLink>
            <Description>{props.description}</Description>
            {props.crew ? <div><Description><span>Authors</span> : {props.crew}</Description>
            <Description><span>Imdb Rating</span> : {props.imDbRating}</Description> </div> : null}
            <hr/>
        </Wrapper>
    )
}

export default Films