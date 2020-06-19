import React, { Component } from 'react';
import { Radio, Switch, Slider, Divider, InputNumber, Row, Col } from 'antd';

class AntdRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'A',
            inputValue: 60,
        };
    }

    onChangeA = e => {
        console.log('radio checked value:', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    onChangeB = (checked) => {
        if (checked) {
            console.log(`switch to ${checked}`);
        }
    }

    onChangeC = (value) => {
        console.log('onChangeC value:', value);
    }

    onChangeD = value => {
        console.log('onChangeD value:', value);
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Radio.Group onChange={this.onChangeA} value={this.state.value}>
                        <Radio value='A'>A</Radio>
                        <Radio value='B'>B</Radio>
                        <Radio value='C'>C</Radio>
                        <Radio value='D'>D</Radio>
                    </Radio.Group>
                </div>
                <Divider orientation="left">Switch 开关</Divider>
                <div style={{ marginTop: '10px' }}>
                    <Switch
                        checkedChildren="开启"
                        unCheckedChildren="关闭"
                        onChange={this.onChangeB}
                    />
                </div>
                <Divider orientation="left">Slider 滑动输入条</Divider>
                <div style={{ marginTop: '10px' }}>
                    <Slider
                        defaultValue={60}
                        tooltipVisible
                        onChange={this.onChangeC}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={1}
                                max={100}
                                onChange={this.onChangeD}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={100}
                                style={{ margin: '0 16px' }}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                                onChange={this.onChangeD}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AntdRadio;