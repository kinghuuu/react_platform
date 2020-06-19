import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class AntdBreadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Application Center
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Application List
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

export default AntdBreadcrumb;