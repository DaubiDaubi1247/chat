import { NewsAPI } from "../../apis/api";

const SET_SUBSCR = "SET_SUBSCR";
const SET_MEMES_ARR = "SET_MEMES_ARR";
const SET_ANIMAL_ARR = "SET_ANIMAL_ARR";

export const setSubscr = (key, bool) => {
    return {
        type: SET_SUBSCR,
        key,
        bool,
    }
}

const setAnimalArr = (animalArr) => {
    return {
        type: SET_ANIMAL_ARR,
        animalArr,
    }
}

const setMemesArr = (memesArr) => {
    return {
        type: SET_MEMES_ARR,
        memesArr,
    }

}

const initialState = {
    arrSubscr: [{
            groupName: "anime",
            subscr: JSON.parse(localStorage.getItem("anime")) || false,
            image: null
        },
        {
            groupName: "animals",
            subscr: JSON.parse(localStorage.getItem("animals")) || false,
            image: null
        },
        {
            groupName: "memes",
            subscr: JSON.parse(localStorage.getItem("memes")) || false,
            image: null
        },
    ],
    animalArr: [],
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
        case SET_ANIMAL_ARR:
            return {
                ...state,
                animalArr: [...action.animalArr]
            }
        default:
            return state
    }
}



export const getAnimal = () => (dispatch) => {
    NewsAPI.getAnimal()
        .then((response) => {
            if (response.status === 200) {
                dispatch(setAnimalArr(response.data.message))
            }
        })
}

export const getMemes = () => (dispatch) => {
    NewsAPI.getMemes()
        .then(response => {
            if (response.status === 200) {
                dispatch(setMemesArr(response.data.data.memes));
            }
        })
}


export default newsReducer