import React, { Component } from 'react';
import './index.less'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import storageUtils from '../../utils/storageUtils'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import TodoList from '../todoList'
import Test from '../test';

const { Sider, Content } = Layout;
class Home extends Component {
    render() {
        const user = storageUtils.getUser()
        if (!user || !user.username) {
            //自动跳转到登录页面
            return <Redirect to='/login'></Redirect>
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{ margin: '20px', backgroundColor: 'rgb(255,255,255)' }}>
                        <Switch>
                            <Route path='/todoList' component={TodoList}></Route>
                            <Route path='/test' component={Test}></Route>
                            <Redirect to='/todoList'></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;