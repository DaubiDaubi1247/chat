import { NavLink,} from "react-router-dom"
import styled from "styled-components"
import "./film.scss"



const TitleText = styled.div`
    margin-bottom:10px;
`

const Description = styled.div`
    margin-bottom:5px;
    span {
        font-weight:bold;
    }
`

const Film = (props) => {
    return (
        <div className="film-desc">
            <NavLink to={`${props.id}`}>
                <TitleText>{props.fullTitle || props.title}</TitleText>
            </NavLink>
            <NavLink to={`${props.id}`}>
                <img className="film-desc__title-img " src={props.image} alt="" />
            </NavLink>
            {props.crew ? 
                <div>
                    <div>
                        <span>Authors</span> 
                        : {props.crew}
                    </div>
                    <div>
                        <span>Imdb Rating</span>
                        : {props.imDbRating}
                    </div> 
                </div> 
            : null}
            <hr/>
        </div>
    )
}

export default Film