import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);
class AntdDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={menu} placement="topLeft">
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topCenter">
                        <Button>topCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topRight">
                        <Button>topRight</Button>
                    </Dropdown>
                </div>

            </div>
        );
    }
}

export default AntdDropdown;