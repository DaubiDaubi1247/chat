import React from "react"
import { connect } from "react-redux"
import Preloader from "../../../common/Preloader/Preloader"
import { setLoading } from "../../../redux/reducers/common-reducer"
import { getArrFilms, getStartFilms, setRequestText } from "../../../redux/reducers/film-reducer"
import Film from "./film/Film"
import "./film-container.scss"


class FilmsContainer extends React.Component {
    
    state = {
        text: "",
    }
    
    componentDidMount = () => {
        if (this.props.arrMovies.length === 0) { // если длина массива стартовых фильмов === 0 то сделать запрос за фильмами, что бы лишний раз не делать запрос
            this.props.setLoading(true);
            this.props.getStartFilms();         
        }
    }

    getArrFilms = () => {
        if (this.props.arrMovies.length === 0) {
            return <h2 className="films__no-found-title">Фильмы по запросу {this.props.text} не найдены((</h2>
        }
        return this.props.arrMovies.map((el) => <Film {...el}/>)
    }
    
    pushUserSymb = (e) =>{
        this.setState({text:e.target.value});
    }
    
    sendRequestInState = () => {
        this.props.setLoading(true);
        this.props.setRequestText(this.state.text);
        this.props.getArrFilms(this.state.text);
    }

    render() {
        return (
            <div className="films">  
                <div className="container">
                    {this.props.isLoading ? <Preloader/> :
                    <div>
                        <input className="films__input" type="text" onChange={this.pushUserSymb} value={this.state.text} placeholder="Введите название фильма"/>
                        <button className="films__btn" onClick={this.sendRequestInState}>
                            Найти Фильмы
                        </button>
                        {
                            this.getArrFilms()
                        }
                    </div>
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        arrMovies:state.films.arrMovies,
        text: state.films.text,
        isLoading: state.common.isLoading
    }
}


export default 
    connect(mapStateToProps,{
        getArrFilms,setRequestText,getStartFilms,setLoading
    })
(FilmsContainer)