const SET_TASK = "SET_TASK";
const REMOVE_TASK = "REMOVE_TASK"

export const setTask = (value) => {
    return {
        type: SET_TASK,
        value,
    }
}

export const removeTask = (key) => {
    return {
        type: REMOVE_TASK,
        key
    }
}

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

const selfControlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            let tempArr = [...state.tasks, action.value];
            localStorage.setItem('tasks', JSON.stringify(tempArr));
            return {
                ...state,
                tasks: [...tempArr]
            }
        case REMOVE_TASK:
            let tempArrForRemove = [...state.tasks];
            tempArrForRemove.splice(action.key, 1)
            localStorage.setItem('tasks', JSON.stringify(tempArrForRemove));
            return {
                ...state,
                tasks: [...tempArrForRemove]
            }
        default:
            return state
    }
}



export default selfControlReducer