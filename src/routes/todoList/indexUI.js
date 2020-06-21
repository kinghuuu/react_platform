//改成无状态组件
import React from 'react';
import { Input, Button, List } from 'antd'
import './index.less'

const IndexUI = (props) => {
    const {
        inputValue, list,
        changeInputValue, clickBtn, deleteItem
    } = props
    return (
        <div style={{ margin: '10px' }} className='todoList'>
            <div>
                <Input
                    placeholder='Write Something'
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={changeInputValue}
                    value={inputValue}
                ></Input>
                <Button
                    type='primary'
                    onClick={clickBtn}
                >增加</Button>
            </div>
            <div style={{ marginTop: '10px', width: '400px' }}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => {
                                deleteItem(index)
                            }}
                        >
                            {item}
                        </List.Item>
                    )}
                ></List>
            </div>
        </div>
    );
}

export default IndexUI;

//下面是class组件
/*
import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import './index.less'

class IndexUI extends Component {
    render() {
        const {
            inputValue, list,
            changeInputValue, clickBtn, deleteItem
        } = this.props
        return (
            <div style={{ margin: '10px' }} className='todoList'>
                <div>
                    <Input
                        placeholder={inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={changeInputValue}
                        value={inputValue}
                    ></Input>
                    <Button
                        type='primary'
                        onClick={clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={() => {
                                    deleteItem(index)
                                }}
                            >
                                {item}
                            </List.Item>
                        )}
                    ></List>
                </div>
            </div>
        );
    }
}

export default IndexUI;
*/