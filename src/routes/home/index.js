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
import AntdTypography from '../antdComponents/antdTypography';
import AntdDivider from '../antdComponents/antdDivider';
import AntdGrid from '../antdComponents/antdGrid';
import AntdSpace from '../antdComponents/antdSpace';
import AntdBreadcrumb from '../antdComponents/antdBreadcrumb';
import AntdDropdown from '../antdComponents/antdDropdown';
import AntdMenu from '../antdComponents/antdMenu';
import AntdPagination from '../antdComponents/antdPagination';
import AntdPageHeader from '../antdComponents/antdPageHeader';
import AntdSteps from '../antdComponents/antdSteps';
import AntdCheckbox from '../antdComponents/antdCheckbox';
import AntdCascader from '../antdComponents/antdCascader';
import AntdInput from '../antdComponents/antdInput';
import AntdRate from '../antdComponents/antdRate';
import AntdRadio from '../antdComponents/antdRadio';
import AntdSelect from '../antdComponents/antdSelect';

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
                            <Route path='/antdTypography' component={AntdTypography}></Route>
                            <Route path='/antdDivider' component={AntdDivider}></Route>
                            <Route path='/antdGrid' component={AntdGrid}></Route>
                            <Route path='/antdSpace' component={AntdSpace}></Route>
                            <Route path='/antdBreadcrumb' component={AntdBreadcrumb}></Route>
                            <Route path='/antdDropdown' component={AntdDropdown}></Route>
                            <Route path='/antdMenu' component={AntdMenu}></Route>
                            <Route path='/antdPagination' component={AntdPagination}></Route>
                            <Route path='/antdPageHeader' component={AntdPageHeader}></Route>
                            <Route path='/antdSteps' component={AntdSteps}></Route>
                            <Route path='/antdCheckbox' component={AntdCheckbox}></Route>
                            <Route path='/antdCascader' component={AntdCascader}></Route>
                            <Route path='/antdInput' component={AntdInput}></Route>
                            <Route path='/antdRate' component={AntdRate}></Route>
                            <Route path='/antdRadio' component={AntdRadio}></Route>
                            <Route path='/antdSelect' component={AntdSelect}></Route>
                            <Redirect to='/main'></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;