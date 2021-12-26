import { autAPI } from "../../apis/api";

const IS_LOGIN = "IS_LOGIN";

const isLogin = (userInfo) => {
    return {
        type : IS_LOGIN,
        userInfo
    }
}

const initialState = {
    info:null,
    isLogin: false
}

const authReducer = (state = initialState,actions) => {
    switch (actions.type) {
        case IS_LOGIN:
            return {
                ...state,
                info:actions.userInfo,
                isLogin: true,
            }
        default: return state
    }
}

export const requestLogin = () => (dispatch) => {
    autAPI.isLogin()
        .then(response => {
            if (!response.resultCode) {
                dispatch(isLogin(response.data.data))           
            }
        })
}

export default authReducer