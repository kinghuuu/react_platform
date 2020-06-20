import React, { Component } from 'react';
import { Cascader } from 'antd';

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
class AntdCascader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (value) => {
        console.log('value:', value)
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Cascader
                        options={options}
                        onChange={this.onChange}
                        placeholder="Please select"
                        expandTrigger="hover"
                        size="large"
                    />
                </div>
            </div>
        );
    }
}

export default AntdCascader;