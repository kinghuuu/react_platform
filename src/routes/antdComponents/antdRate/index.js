import React, { Component } from 'react';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const desc = ['terrible', 'terrible', 'bad', 'bad', 'normal', 'normal', 'good', 'good', 'wonderful', 'wonderful'];
class AntdRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
            describe: ''
        };
    }

    handleChange = value => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <div>
                <div>
                    <Rate />
                </div>
                <div>
                    <Rate character={<HeartOutlined />} allowHalf />
                </div>
                <div>
                    <Rate allowHalf defaultValue={2.5} />
                </div>
                <div>
                    <Rate
                        count={10}
                        tooltips={desc}
                        onChange={this.handleChange}
                        value={value}
                    />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </div>
            </div>
        );
    }
}

export default AntdRate;