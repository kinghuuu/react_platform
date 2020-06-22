import React, { Component } from 'react';
import { Avatar, Divider, Badge } from 'antd';
import { UserOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from '../../../assets/images/logo.png'

class AntdAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <Avatar size="large" icon={<UserOutlined />} />
                    <Avatar icon={<UserOutlined />} />
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                    <Avatar shape="square" icon={<UserOutlined />} />
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                    <Divider orientation="left">1</Divider>
                    <Avatar icon={<UserOutlined />} />
                    <Avatar>U</Avatar>
                    <Avatar size={40}>USER</Avatar>
                    <Avatar shape="square" src={logo} />
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <Badge count={88}>
                        <Avatar shape="square" size={50} src={logo} style={{ backgroundColor: '#F8F8FF' }} />
                    </Badge>
                    <Divider orientation="left">徽标</Divider>
                    <Badge dot>
                        <NotificationOutlined />
                    </Badge>

                </div>
            </div >
        );
    }
}

export default AntdAvatar;