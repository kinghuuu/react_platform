import React, { Component } from 'react';
import { Input, Mentions, Divider } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Mentions;
const MOCK_DATA = {
    '@': ['qq.com', '163.com', '189.com'],
    '#': ['1.0', '2.0', '3.0'],
};
class AntdInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix: '@',
        };
    }

    onClick = (e) => {
        console.log('click value:', e.target.value)
    }

    onSearch = (e, prefix) => {
        console.log('onSearch e:', e)
        this.setState({ prefix });
    };

    onSelect = (e) => {
        console.log('select e:', e)
    }

    render() {
        const { prefix } = this.state;
        return (
            <div>
                <Input placeholder="Basic usage" />
                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                    allowClear
                />
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                <Input.Password
                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Input prefix="￥" suffix="RMB" style={{ width: 200 }} />
                <Divider orientation="left">Mentions 提及</Divider>
                <Mentions
                    style={{ width: '100%' }}
                    placeholder="input @ to mention people, # to mention tag"
                    prefix={['@', '#']}
                    onClick={this.onClick}
                    onSearch={this.onSearch}
                    onSelect={this.onSelect}
                >
                    {(MOCK_DATA[prefix] || []).map(value => (
                        <Option key={value} value={value}>
                            {value}
                        </Option>
                    ))}
                </Mentions>
            </div>
        );
    }
}

export default AntdInput;