import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

const SignIn: React.FC = () => {
    return (
        <Form {...layout} className="login">
            <Form.Item
                label="E-mail"
                name="email"
                rules={[{
                    required: true,
                    type: 'email',
                    message: 'Please input your e-mail address!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{
                    required: true,
                    message: 'Please input your password!'
                }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignIn;