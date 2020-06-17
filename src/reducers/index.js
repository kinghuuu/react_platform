import { combineReducers } from 'redux'
import { todoList } from './todoList/reducer'

const rootReducer = combineReducers({
    todoList
})

export default rootReducer