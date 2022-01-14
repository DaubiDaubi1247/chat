import styled, { css } from "styled-components"

const Wrapper = styled.div`
    margin:5px 0 0 10px;
    span:not([class]){
        font-weight:bold;
    }
`

const Titleimg = styled.img`
    max-width:500px
    max-height:500px
`

const TitleText = styled.span`
    display:block;
    font-size:26px;
    margin:0;
    margin-bottom:10px;
    ${props => props.description && css`
        margin-bottom : 5px;
        display:block;
    `}
    ${props => props.name && css`
        text-align : center;
        margin-bottom:15px
    `}
`
const DescriptionWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    align-items:center;
    margin-bottom:10px
`
const TextWrapper = styled.div`
    margin-left:10px;
`

const Description = styled.div`
    margin-bottom:5px;
    font-size:26px;
    span {
        font-weight:bold;
    }
`

const Film = (props) => {
    return (
        <Wrapper>
            <TitleText description name><span>{props.fullTitle || props.title}</span></TitleText>
            <DescriptionWrapper>
                <Titleimg src={props.image} alt="" />
                    <TextWrapper>
                        <TitleText description><span>Directors</span> : {props.directors}</TitleText>
                        <TitleText description><span>Stars</span> : {props.stars}</TitleText>
                        <TitleText description><span>Year of creation :</span> {props.year}</TitleText>
                        <TitleText description><span>IMDB</span> rating : {props.imDbRating}</TitleText>
                        <TitleText description><span>Year</span> of Release : {props.releaseDate}</TitleText>
                        <TitleText description><span>Awards</span> : {props.awards}</TitleText>
                        <TitleText description><span>Duration</span> : {props.runtimeStr}</TitleText>
                        <TitleText description><span>Genres</span> : {props.keywords}</TitleText>
                    </TextWrapper>
            </DescriptionWrapper>
                        <Description ><span><span>Description</span></span> : {props.plot}</Description>
        </Wrapper>
    )
}

export default Film