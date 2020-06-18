import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

import './index.less'
import logo from '../../assets/images/logo.png'
import storageUtils from '../../utils/storageUtils'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
};
class Login extends Component {
    render() {
        //如果用户已经登录,自动跳转到管理页面
        const user = storageUtils.getUser()
        if (user && user.username) {
            return <Redirect to='/'></Redirect>
        }

        const onFinish = values => {
            //请求登录   暂时写个伪登录
            const user = { username: 'admin', password: '123456' }
            storageUtils.saveUser(user)   //保存在local中
            this.props.history.replace('/')
        }

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo'></img>
                    <h1>React Platform</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: false }}
                        onSubmit={this.handleSubmit}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                { required: true, message: '用户名必须输入!' },
                                // { min: 4, message: '用户名至少4位!' },
                                // { max: 12, message: '用户名最多12位' },
                                // { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成!' }
                            ]}
                        >
                            <Input placeholder='admin' />
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '密码必须输入!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住用户</Checkbox>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default Login;