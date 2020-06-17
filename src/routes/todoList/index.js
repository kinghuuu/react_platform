import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.less'
import { Input, Button, List } from 'antd'
import { changeInputAction, addItemAction, deleteItemAction } from '../../actions/todoList/action'

class TodoList extends Component {

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
        console.log('this.props:', this.props)
        const { inputValue, list } = this.props

        return (
            <div style={{ margin: '10px' }} className='todoList'>
                <div>
                    <Input
                        placeholder={inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={inputValue}
                    ></Input>
                    <Button
                        type='primary'
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (<List.Item
                            onClick={this.deleteItem.bind(this, index)}
                        >{item}</List.Item>)}
                    ></List>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { inputValue, list } = state.todoList
    return { inputValue, list }
}

export default connect(mapStateToProps)(TodoList);