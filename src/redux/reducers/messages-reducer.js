import { MessagesAPI } from "../../apis/api";

const SET_DATA_USER = "SET_DATA_USER";
const SET_MESSAGE = "SET_MESSAGE"
const SET_USERS = "SET_USERS"
const ADD_MESSAGE = "ADD_MESSAGE"

const setUser = (data) => {
    return {
        type: SET_DATA_USER,
        data,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

const setMessage = (arrMessages) => {
    return {
        type: SET_MESSAGE,
        arrMessages
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message,
    }
}

const initialState = {
    userData: null,
    users: [],
    messages: [],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_USER:
            return {
                ...state,
                userData: {...action.data } // пока что пусть будет, но в дальнейшем нужно будет это поле перенести в регистрацию 
            }
        case SET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, ...action.arrMessages]
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state
    }
}

export const setUserData = data => dispatch => { // прикрутить к регистрации
    MessagesAPI.g(data)
        .then(() => dispatch(setUser(data)))
}

export const getOnlineUsersAndMsg = roomId => dispatch => {
    MessagesAPI.getOnlineUsersAndMsg(roomId).then((response) => {
        dispatch(setUsers(response.data.users));
        dispatch(setMessage(response.data.msg))
    })
}

export default messagesReducer