import React, { Component } from 'react';
import _ from 'lodash'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import {
    FileOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../utils/menuConfig'

const { SubMenu } = Menu;
class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.menuNodes = this.getMenuNodes(menuList)
    }

    //根据menu的数据数组生成对应的标签数组   使用map() + 递归来实现的
    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <FileOutlined />
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            } else {
                //查找一个与当前请求路径匹配的子item
                const cItem = item.children.find(cItem => _.isEqual(cItem.key, path))
                //如果存在,打开当前item的子列表
                if (cItem) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <MenuUnfoldOutlined />
                                {item.title}
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)   //递归方法
                        }
                    </SubMenu>
                )
            }
        })

    }

    render() {
        const path = this.props.location.pathname
        //得到需要打开菜单项的key
        const openKey = this.openKey
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo'></img>
                    <h1>Platform</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftNav);