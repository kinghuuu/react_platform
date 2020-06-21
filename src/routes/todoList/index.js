import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTodoList, changeInputAction, addItemAction, deleteItemAction } from '../../actions/todoList/action'
import IndexUI from './indexUI'

class TodoList extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        const action = getTodoList()
        dispatch(action)
    }

    changeInputValue = (e) => {
        const { dispatch } = this.props
        const action = changeInputAction(e.target.value)
        dispatch(action)
    }

    clickBtn = () => {
        const { dispatch } = this.props
        const action = addItemAction()
        dispatch(action)
    }

    deleteItem = (index) => {
        const { dispatch } = this.props
        const action = deleteItemAction(index)
        dispatch(action)
    }

    render() {
        // console.log('this.props:', this.props)
        const { inputValue, list } = this.props

        return (
            <IndexUI
                inputValue={inputValue}
                list={list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem.bind(this)}
            ></IndexUI>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('state:', state)
    const { inputValue, list } = state.todoList
    return { inputValue, list }
}

export default connect(mapStateToProps)(TodoList);