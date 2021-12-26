const SET_SUBSCR = "SET_SUBSCR";


export const setSubscr = (key, bool) => {
    return {
        type: SET_SUBSCR,
        key,
        bool,
    }
}


const initialState = {
    arrSubscr: [{
            groupName: "anime",
            subscr: localStorage.getItem("anime") || false,
            image: null
        },
        {
            groupName: "animals",
            subscr: localStorage.getItem("animals") || false,
            image: null
        },
        {
            groupName: "memes",
            subscr: localStorage.getItem("memes") || false,
            image: null
        },
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSCR:
            return {
                ...state,
                arrSubscr: state.arrSubscr.map(el => {
                    if (el.groupName === action.key) {
                        el.subscr = action.bool
                        localStorage.setItem(el.groupName, el.subscr);
                    }
                    return el
                })
            }
        default:
            return state
    }
}

export default newsReducer