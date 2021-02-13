import  {combineReducers, createStore } from 'redux'
import {reducerMain} from './reducerMain'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    reducerMain,
    form: formReducer
})

export const Store = createStore(reducers)