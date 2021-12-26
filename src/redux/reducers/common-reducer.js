const SET_LOADING = "SET_LOADING";


export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        bool,
    }
}

const initialState = {
    isLoading: false
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.bool
            }
        default:
            return state
    }
}

export default commonReducer