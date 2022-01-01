import { NewsAPI } from "../../apis/api";
import { setLoading } from "./common-reducer";

const SET_SUBSCR = "SET_SUBSCR";
const SET_MEMES_ARR = "SET_MEMES_ARR";
const SET_DOG_ARR = "SET_DOG_ARR";

export const setSubscr = (key, bool) => {
    return {
        type: SET_SUBSCR,
        key,
        bool,
    }
}

const setDogArr = (dogsArr) => {
    return {
        type: SET_DOG_ARR,
        dogsArr,
    }
}

const setMemesArr = (memesArr) => {
    return {
        type: SET_MEMES_ARR,
        memesArr,
    }

}

const initialState = {
    arrSubscr: [ //{
        //         groupName: "cats",
        //         subscr: JSON.parse(localStorage.getItem("cats")) || false,
        //         image: null
        //     },
        {
            groupName: "dogs",
            subscr: JSON.parse(localStorage.getItem("dogs")) || false,
            image: null
        },
        {
            groupName: "memes",
            subscr: JSON.parse(localStorage.getItem("memes")) || false,
            image: null
        },
    ],
    dogsArr: [],
    memesArr: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSCR:
            return {
                ...state,
                arrSubscr: state.arrSubscr.map(el => {
                    if (el.groupName === action.key) {
                        el.subscr = action.bool
                        localStorage.setItem(el.groupName, JSON.stringify(el.subscr));
                    }
                    return el
                })
            }
        case SET_MEMES_ARR:
            return {
                ...state,
                memesArr: [...action.memesArr],
            }
        case SET_DOG_ARR:
            return {
                ...state,
                dogsArr: [...action.dogsArr]
            }
        default:
            return state
    }
}


export const getDog = () => (dispatch) => {
    NewsAPI.getDog()
        .then((response) => {
            if (response.status === 200) {
                dispatch(setLoading(false))
                dispatch(setDogArr(response.data.message))
            }
        })
}

export const getMemes = () => (dispatch) => {
    NewsAPI.getMemes()
        .then(response => {
            if (response.status === 200) {
                dispatch(setLoading(false))
                dispatch(setMemesArr(response.data.data.memes));
            }
        })
}


export default newsReducer