import { useEffect } from "react"
import { connect } from "react-redux"
import { getDog, getMemes } from "../../../redux/reducers/news-reducer"
import NewsContent from "./news-content/newContent"
import { setLoading } from "../../../redux/reducers/common-reducer"
import Preloader from "../../../common/Preloader/Preloader"


const NewsContentContainer = (props) => {
    const request = (isSubscr,requestFunction) => {
        if (isSubscr) {
            props.setLoading(true)
            requestFunction()
        }
    }

    useEffect(() => {
        request(props.arrSubscr[1].subscr, props.getMemes)     
    },[props.memesArr.length,props.arrSubscr[1].subscr])
    
    useEffect(() => {
        request(props.arrSubscr[0].subscr, props.getDog)
    },[props.dogsArr.length,props.arrSubscr[0].subscr])
    
    return ( 
        <div>
            {props.isLoading ? 
                <Preloader/>
            :
                <NewsContent memesArr={props.memesArr} dogsArr={props.dogsArr} setLoading={props.setLoading}/>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        memesArr:state.news.memesArr,
        arrSubscr:state.news.arrSubscr,
        dogsArr: state.news.dogsArr,
        isLoading: state.common.isLoading
    }
}
export default connect(mapStateToProps,{
    getMemes,getDog,setLoading
})(NewsContentContainer)