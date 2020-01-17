import {combineReducers} from 'react-redux'

import countReducer from './countReducer'
import todoReducer from './todoReducer'

export const rootReducer = combineReducers({countReducer, todoReducer})