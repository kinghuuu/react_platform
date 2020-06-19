import React, { Component } from 'react';
import { Button, Tooltip, Radio } from 'antd';
import {
    SearchOutlined,
    DownloadOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import './index.less'

class AntdButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'default',
            loadings: [],
        };
    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { size, loadings } = this.state;
        return (
            <div className='antdButton'>
                <div style={{ marginTop: '10px' }}>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">A</Button>
                    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={size}>Primary</Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                    <br />
                    <Button type="link" size={size}>Link</Button>
                    <br />
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }} className="site-button-ghost-wrapper">
                    <Button type="primary" ghost>Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="text" ghost>Text</Button>
                    <Button type="link" ghost>Link</Button>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" size="small" loading>Loading</Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                    <br />
                    <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>Click me!</Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}
                    >Click me!</Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => this.enterLoading(2)}
                    />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Button type="primary" block>Primary</Button>
                    <Button block>Default</Button>
                    <Button type="dashed" block>Dashed</Button>
                    <Button type="link" block>Link</Button>
                </div>
            </div>
        );
    }
}

export default AntdButton;