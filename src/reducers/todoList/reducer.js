import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../../constants/todoList/actionTypes'
import _ from 'lodash';

const defaultState = {
    inputValue: '',
    list: []
}

function todoList(state = defaultState, action) {
    if (_.isEqual(CHANGE_INPUT, action.type)) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (_.isEqual(ADD_ITEM, action.type)) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (_.isEqual(DELETE_ITEM, action.type)) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (_.isEqual(GET_LIST, action.type)) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}
export { todoList }
