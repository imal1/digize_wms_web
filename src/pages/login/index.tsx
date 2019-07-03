/**
 * @Author: chenzj
 * @Date:   2019-07-02 10:32:31
 * @Last modified by:   chenzj
 * @Last modified time: 2019-07-03 11:30:42
 */

import React from 'react';
import { Button, Row, Col, Card, Form, Input, Icon, Typography, Divider, message } from 'antd';
import './index.scss';
import Home from '../../services/Home';

const { Title } = Typography;

class LoginPage extends React.Component<any, any> {
    handleSubmit = () => {
        Home.loginAsync({})
            .then((res: any) => {})
            .catch((err: Error) => {
                message.error(err.message);
            });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginPage">
                <Row type="flex" align="middle">
                    <Col xxl={16} xl={14} md={12}>
                        <div>物流WMS平台</div>
                    </Col>
                    <Col xxl={8} xl={10} md={12} className="login-wrapper">
                        <Card className="login-card">
                            <Title level={4}>鼎泽后台管理</Title>
                            <Divider />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="用户编码"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" block={true} htmlType="submit" className="login-form-button">
                                        立即登入
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Form.create()(LoginPage);
