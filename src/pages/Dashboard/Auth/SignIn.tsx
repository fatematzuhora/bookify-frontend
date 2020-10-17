import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { login } from 'services/auth.service';
import { LoginDTO } from 'models/auth.model';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const SignIn: React.FC = () => {
    const onFinish = async (values: LoginDTO) => {
        const { email, password } = values;

        login({email, password})
        .then((res) => {
            message.success(`Success!`, .5);
        })
        .catch((err) => {
            if (err.error !== '') {
                message.error(err.message);
            }
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <Form
            {...layout}
            className="auth_form auth_form-signin"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
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
                <span className="px-2">
                    Don't have an account? <a href="/auth/signup">Register</a> Here!
                </span>
            </Form.Item>
        </Form>
    )
}

export default SignIn;