import React from "react";
import { Button, Row, Col, Card, Form, Input, Icon, Typography, Divider } from "antd";
import "./index.scss";

const { Title } = Typography;

class LoginPage extends React.Component<any, any> {
  handleSubmit = () => {

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginPage">
        <Row>
          <Col span={18}>
            <div>物流WMS平台</div>
          </Col>
          <Col span={6} className="login-wrapper">
            <Card className="login-card">
              <Title level={4}>鼎泽后台管理</Title>
              <Divider />
              <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="用户编码"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    block={true}
                    htmlType="submit"
                    className="login-form-button"
                  >
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
