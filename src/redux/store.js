//импортируем store 
import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./reducers/auth-reducer"
import thunkMiddleWare from 'redux-thunk'
import filmsReducer from "./reducers/film-reducer"
import commonReducer from "./reducers/common-reducer"
import newsReducer from "./reducers/news-reducer"
import selfControlReducer from "./reducers/self-control-reducer"
import messagesReducer from "./reducers/messages-reducer"

let reducers = combineReducers({
    common: commonReducer,
    auth: authReducer,
    films: filmsReducer,
    news: newsReducer,
    selfControl: selfControlReducer,
    messages: messagesReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;