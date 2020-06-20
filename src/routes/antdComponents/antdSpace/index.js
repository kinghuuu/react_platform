import React, { Component } from 'react';
import { Button, Space, Upload, Popconfirm, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.less'

class AntdSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Space>
                        <Button type="primary">Button</Button>
                        <Upload>
                            <Button>
                                <UploadOutlined /> Click to Upload
                    </Button>
                        </Upload>
                        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                            <Button>Confirm</Button>
                        </Popconfirm>
                    </Space>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Space direction="vertical">
                        <Card title="Card" style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card title="Card" style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Space>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <div className="space-align-container">
                        <div className="space-align-block">
                            <Space align="center">
                                center
                                <Button type="primary">Primary</Button>
                                <span className="mock-block">Block</span>
                            </Space>
                        </div>
                        <div className="space-align-block">
                            <Space align="start">
                                start
                                <Button type="primary">Primary</Button>
                                <span className="mock-block">Block</span>
                            </Space>
                        </div>
                        <div className="space-align-block">
                            <Space align="end">
                                end
                                <Button type="primary">Primary</Button>
                                <span className="mock-block">Block</span>
                            </Space>
                        </div>
                        <div className="space-align-block">
                            <Space align="baseline">
                                baseline
                                <Button type="primary">Primary</Button>
                                <span className="mock-block">Block</span>
                            </Space>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <Space size={50}>
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="link">Link</Button>
                    </Space>
                </div>
            </div>
        );
    }
}

export default AntdSpace;