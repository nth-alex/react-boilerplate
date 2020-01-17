import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import auth from './auth'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    auth
})

const store = createStore(rootReducer, enhancer(
    applyMiddleware(thunk)
))

export default store
