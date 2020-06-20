import React, { Component } from 'react';
import { PageHeader } from 'antd';
import './index.less'

const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
];
class AntdPageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => null}
                        title="Title"
                        subTitle="This is a subtitle"
                    />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <PageHeader
                        className="site-page-header"
                        title="Title"
                        breadcrumb={{ routes }}
                        subTitle="This is a subtitle"
                    />
                </div>

            </div>
        );
    }
}

export default AntdPageHeader;