import { FilmsAPI } from "../../apis/api"
import { setLoading } from "./common-reducer"

const GET_ARR_FILMS = "GET_ARR_FILMS"
const SET_REQUEST_TEXT = "SET_REQUEST_TEXT"
const GET_FULL_DESCRIPTION = "GET_FULL_DESCRIPTION"

const getFilms = (arr) => {
    return {
        type: GET_ARR_FILMS,
        arr
    }
}

export const setRequestText = (text) => {
    return {
        type: SET_REQUEST_TEXT,
        text
    }
}


const getFullDescr = (filmData) => {
    return {
        type: GET_FULL_DESCRIPTION,
        filmData
    }
}

let initialState = {
    arrMovies: [],
    text: "",
}

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARR_FILMS:
            return {
                ...state,
                arrMovies: [...action.arr],
            }
        case SET_REQUEST_TEXT:
            return {
                ...state,
                text: action.text
            }
        case GET_FULL_DESCRIPTION:
            return {
                ...state,
                filmData: {...action.filmData }
            }
        default:
            return state
    }
}

export const getArrFilms = (name) => (dispatch) => {
    FilmsAPI.searchMovie(name)
        .then(response => {
            dispatch(setLoading(false));
            dispatch(getFilms(response.data.results))
        })
}


export const getStartFilms = () => (dispatch) => {
    FilmsAPI.getStartMovie()
        .then(response => {
            dispatch(setLoading(false));
            dispatch(getFilms(response.data.items))
        })
}

export const getFullDescription = (id) => (dispatch) => {
    FilmsAPI.getFilmDesc(id)
        .then(response => {
            dispatch(setLoading(false));
            dispatch(getFullDescr(response.data))
        })
}

export default filmsReducer