import React, { Component } from 'react';
import { Pagination, Divider, Calendar } from 'antd'
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
import './index.less'
import _ from 'lodash'
import moment from 'moment'

class AntdIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onDateChange = (date) => {
        //获取当前时间
        var now = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log('当前时间: ', now)

        if (!_.isEmpty(date)) {
            let changeDate = moment(date).format('YYYY-MM-DD')
            console.log('changeDate: ', changeDate)
        }
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
                <Divider orientation="left">分页</Divider>
                <Pagination defaultCurrent={6} total={500} />
                <Divider orientation="left">日历</Divider>
                <div className="site-calendar-demo-card">
                    <Calendar
                        fullscreen={false}
                        onSelect={this.onDateChange}
                    />
                </div>
            </div>
        );
    }
}

export default AntdIcon;