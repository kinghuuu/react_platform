import React, { Component } from 'react';
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd'
import { ExclamationCircleOutlined, PoweroffOutlined } from '@ant-design/icons';
import menuList from '../../utils/menuConfig'
import storageUtils from '../../utils/storageUtils'
import './index.less'

class Header extends Component {
    getTitle = () => {
        //得到当前请求路径
        const path = this.props.location.pathname
        let title = ''
        menuList.forEach(item => {
            if (_.isEqual(item.key, path)) {
                //当item对象的key与path一样,item的title就是需要显示的title
                title = item.title
            } else if (item.children) {
                //在所有item中查找匹配
                const cItem = item.children.find(cItem => _.isEqual(cItem.key, path))
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    logout = () => {
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确定退出吗?',
            onOk: () => {
                //删除保存的user数据
                storageUtils.removeUser()
                //跳转到login页面
                this.props.history.replace('/login')
            }
        })
    }

    render() {
        const username = storageUtils.getUser().username
        const title = this.getTitle()
        return (
            <div className='header'>
                <div className='header-title'>{title}</div>
                <div className='header-user'>
                    <span>欢迎,{username}</span>
                    <Button type="link" icon={<PoweroffOutlined />} onClick={this.logout}></Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);