import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
    Button, DatePicker, Form, Input, InputNumber,
    message, Result, Select, Space, Upload
} from 'antd';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { BreadcrumbNav } from 'components/Dashboard';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 }
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 18 },
};

const AddProperty = () => {
    const [country, setCountry] = useState<string>('');
    const [region, setRegion] = useState<string>('');

    const onFinish = async (values: any) => {
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <>
            <BreadcrumbNav parent_name="Property" child_name="Add"/>
            
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

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{
                        required: true,
                        message: 'Please add description!'
                    }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Property Type"
                    name="type"
                    rules={[{ required: true }]}
                >
                    <Select
                        showSearch
                        placeholder="Choose Property Type"
                        optionFilterProp="children"
                        allowClear
                    >
                        <Select.Option value="single">Single</Select.Option>
                        <Select.Option value="double">Double</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: true }]}
                    className="search-content-select"
                >
                    <CountryDropdown
                        value={country}
                        onChange={(val) => setCountry(val)}
                    />
                </Form.Item>

                <Form.Item
                    label="Country"
                    name="city"
                    rules={[{ required: true }]}
                    className="search-content-select"
                >
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => setRegion(val)}
                    />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true }]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Availability"
                    name="price"
                    rules={[{ required: true }]}
                >
                    <Space direction="vertical">
                        <DatePicker.RangePicker />
                    </Space>
                </Form.Item>

                <Form.Item
                    label="Upload"
                    name="upload"
                >
                    <Upload name="image" listType="picture">
                        <Button>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddProperty;