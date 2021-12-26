import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import styled from "styled-components"
import Preloader from "../../../common/Preloader/Preloader"
import { setLoading } from "../../../redux/reducers/common-reducer"
import { getArrFilms, getStartFilms, setRequestText } from "../../../redux/reducers/film-reducer"
import Films from "./films/Film"

const Wrapper = styled.div`
    padding:10px;
`
const Button = styled.button`
    background: black;
    margin-top:10px;
    margin-bottom:10px;
    border:none;
    display:block;
    color:white;
    padding:10px;
    border-radius:6px
`
const Input = styled.input`
    padding:10px;
    width:250px;
    border:solid 2px #000;
    border-radius:6px;
`

const Description = styled.span`
    margin:5px;

`

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
            return <h2>Фильмы не найдены((</h2>
        }
        return this.props.arrMovies.map((el) => <Films {...el}/>)
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
            <Wrapper>  
                {this.props.isLoading ? <Preloader/> : 
                <div>
                    <Input type="text" onChange={this.pushUserSymb} value={this.state.text} placeholder="Введите название фильма"/>
                    <Button onClick={this.sendRequestInState}>Найти Фильмы</Button>
                    {
                        this.getArrFilms()
                    }
                </div>
                }
            </Wrapper>
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


export default compose(
    connect(mapStateToProps,{
        getArrFilms,setRequestText,getStartFilms,setLoading
    }),
)(FilmsContainer)