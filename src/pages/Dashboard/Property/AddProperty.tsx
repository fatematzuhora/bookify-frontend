import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Input, message, Result } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const AddProperty = () => {
    const onFinish = async (values: any) => {
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[{
                    required: true,
                    message: 'Please add a title!',
                    whitespace: false
                }]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
}

export default AddProperty;