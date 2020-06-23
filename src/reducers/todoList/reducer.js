import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../../constants/todoList/actionTypes'
import _ from 'lodash';

const defaultState = {
    inputValue: '',
    list: []
}

function todoList(state = defaultState, action) {
    if (_.isEqual(CHANGE_INPUT, action.type)) {
        return Object.assign({}, state, {
            inputValue: action.value
        })
    }
    if (_.isEqual(ADD_ITEM, action.type)) {
        let newState = JSON.parse(JSON.stringify(state))   //深拷贝
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
        // console.log('state: ', state)
        return Object.assign({}, state, {
            list: action.data
        })
    }
    return state
}
export { todoList }
