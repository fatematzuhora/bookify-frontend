import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Input, message, Result } from 'antd';
import { register } from 'services/auth.service';
import { RegisterDTO } from 'models/auth.model';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const SignUp = () => {
    const onFinish = async (values: RegisterDTO) => {
        const { name, username, email, password } = values;

        register({name, username, email, password})
        .then((res) => {
            ReactDOM.render(
                <Result
                    status="success"
                    title="Registration Successful!"
                    subTitle="Please login to access your account!"
                    extra={[
                        <Button href="signin" type="primary" block>
                            Sign In
                        </Button>
                    ]}
                />,
                document.getElementById('signup_form'),
            );
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
            className="auth_form auth_form-signup"
            id="signup_form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                hasFeedback
                label="Name"
                name="name"
                rules={[{
                    required: true,
                    message: 'Please input your name!',
                    whitespace: true
                }]}
            >
                <Input />
            </Form.Item>

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
                label="Username"
                name="username"
                rules={[{
                    required: true,
                    message: 'Please choose an username!',
                    whitespace: false
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
                label="Confirm Password"
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[{
                    validator:(_, value) => value ? Promise.resolve()
                    : Promise.reject('Should accept agreement')
                }]}
                {...tailLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
                <span className="px-2">
                    Already have an account? <a href="/auth/signin">Login</a> Here!
                </span>
            </Form.Item>
        </Form>
    )
}

export default SignUp;