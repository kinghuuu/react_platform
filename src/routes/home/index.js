import React, { Component } from 'react';
import './index.less'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import storageUtils from '../../utils/storageUtils'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import Main from '../main';
import TodoList from '../todoList'
import Test from '../test';
import AntdButton from '../antdComponents/antdButton';
import AntdIcon from '../antdComponents/antdIcon';
import AntdSpace from '../antdComponents/antdSpace';
import AntdInput from '../antdComponents/antdInput';
import AntdRate from '../antdComponents/antdRate';
import AntdRadio from '../antdComponents/antdRadio';
import AntdAvatar from '../antdComponents/antdAvatar';
import AntdCarousel from '../antdComponents/antdCarousel';
import AntdCard from '../antdComponents/antdCard';
import AntdResult from '../antdComponents/antdResult';

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
                            <Route path='/main' component={Main}></Route>
                            <Route path='/todoList' component={TodoList}></Route>
                            <Route path='/test' component={Test}></Route>
                            <Route path='/antdButton' component={AntdButton}></Route>
                            <Route path='/antdIcon' component={AntdIcon}></Route>
                            <Route path='/antdSpace' component={AntdSpace}></Route>
                            <Route path='/antdInput' component={AntdInput}></Route>
                            <Route path='/antdRate' component={AntdRate}></Route>
                            <Route path='/antdRadio' component={AntdRadio}></Route>
                            <Route path='/antdAvatar' component={AntdAvatar}></Route>
                            <Route path='/antdCarousel' component={AntdCarousel}></Route>
                            <Route path='/antdCard' component={AntdCard}></Route>
                            <Route path='/antdResult' component={AntdResult}></Route>

                            <Redirect to='/main'></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;