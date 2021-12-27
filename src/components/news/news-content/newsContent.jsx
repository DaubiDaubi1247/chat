import { useEffect } from "react"
import { connect } from "react-redux"
import { getAnimal, getMemes } from "../../../redux/reducers/news-reducer"
import styled from "styled-components"
import NewsContent from "./news-content/newContent"



const Wrapper = styled.div`
`
const NewsContentContainer = (props) => {
    useEffect(() => {
        if (props.arrSubscr[2].subscr) {
            props.getMemes();  
        }
    },[props.memesArr.length])
    
    useEffect(() => {
        if (props.arrSubscr[1].subscr) {
            props.getAnimal();  
        }
    },[props.animalArr.length])

    return <NewsContent memesArr={props.memesArr} animalArr={props.animalArr}/>
}

const mapStateToProps = (state) => {
    return {
        memesArr:state.news.memesArr,
        arrSubscr:state.news.arrSubscr,
        animalArr: state.news.animalArr
    }
}
export default connect(mapStateToProps,{
    getMemes,getAnimal
})(NewsContentContainer)