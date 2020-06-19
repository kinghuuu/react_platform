import React, { Component } from 'react';
import {
    ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined,
    UpCircleFilled, DownCircleFilled, LeftCircleFilled, RightCircleFilled,
    UpSquareTwoTone, DownSquareTwoTone, LeftSquareTwoTone, RightSquareTwoTone,
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    SmileTwoTone, HeartTwoTone, CheckCircleTwoTone,

} from '@ant-design/icons';

class AntdIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='antdIcon'>
                <div style={{ marginTop: '10px' }}>
                    <ArrowUpOutlined style={{ fontSize: '30px', color: '#08c' }} /><ArrowDownOutlined /><ArrowLeftOutlined /><ArrowRightOutlined />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <UpCircleFilled style={{ fontSize: '30px', color: '#08c' }} /><DownCircleFilled /><LeftCircleFilled /><RightCircleFilled />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <UpSquareTwoTone style={{ fontSize: '30px' }} /><DownSquareTwoTone /><LeftSquareTwoTone /><RightSquareTwoTone />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <HomeOutlined />
                    <SettingFilled />
                    <SmileOutlined />
                    <SyncOutlined spin />
                    <SmileOutlined rotate={180} />
                    <LoadingOutlined />
                </div>
                <hr></hr>
                <div style={{ marginTop: '10px' }}>
                    <SmileTwoTone style={{ fontSize: '30px' }} />
                    <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '16px' }} />
                    <HeartTwoTone twoToneColor="#fa8c16" style={{ fontSize: '16px' }} />
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                </div>

            </div>
        );
    }
}

export default AntdIcon;