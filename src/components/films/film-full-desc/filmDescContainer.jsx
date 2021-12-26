import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Preloader from "../../../common/Preloader/Preloader";
import { setLoading } from "../../../redux/reducers/common-reducer";
import { getFullDescription } from "../../../redux/reducers/film-reducer";
import Film from "./film-desc/FilmDesc";


const ComponentForParams = (props) => {
    const {idFilm} = useParams();

    return <FilmDescContainer {...props} id={idFilm}/>
}

class FilmDescContainer extends React.Component {


    componentDidMount() {
        this.props.setLoading(true);
        this.props.getFullDescription(this.props.id)
    }
    
    render() {
        return (
            <div>
                {this.props.isLoading ? <Preloader/> : <Film {...this.props.filmData}/>}
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        filmData: state.films.filmData,
        isLoading: state.common.isLoading
    }
}

export default connect(
    mapStateToProps,{
        getFullDescription,setLoading
    }
)(ComponentForParams)

