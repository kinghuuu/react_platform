import React, { Component } from 'react';
import { Pagination } from 'antd';

class AntdPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Pagination total={500} />
                </div>
            </div>
        );
    }
}

export default AntdPagination;