import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

class AntdGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const style = { background: '#0092ff', padding: '8px 0' };
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    <Row>
                        <Col span={24} style={{ backgroundColor: '#bae637' }}>col</Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{ backgroundColor: '#bae637' }}>col-12</Col>
                        <Col span={12} style={{ backgroundColor: '#eaff8f' }}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8} style={{ backgroundColor: '#bae637' }}>col-8</Col>
                        <Col span={8} style={{ backgroundColor: '#eaff8f' }}>col-8</Col>
                        <Col span={8} style={{ backgroundColor: '#bae637' }}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{ backgroundColor: '#bae637' }}>col-6</Col>
                        <Col span={6} style={{ backgroundColor: '#eaff8f' }}>col-6</Col>
                        <Col span={6} style={{ backgroundColor: '#bae637' }}>col-6</Col>
                        <Col span={6} style={{ backgroundColor: '#eaff8f' }}>col-6</Col>
                    </Row>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        Horizontal
                    </Divider>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <Row>
                        <Col style={style} span={8}>col-8</Col>
                        <Col style={style} span={8} offset={8}>
                            col-8
                        </Col>
                    </Row>
                    <Row>
                        <Col style={style} span={6} offset={6}>
                            col-6 col-offset-6
                        </Col>
                        <Col style={style} span={6} offset={6}>
                            col-6 col-offset-6
                        </Col>
                    </Row>
                    <Row>
                        <Col style={style} span={12} offset={6}>
                            col-12 col-offset-6
                        </Col>
                    </Row>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default AntdGrid;