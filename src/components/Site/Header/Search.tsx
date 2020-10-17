import React, { useState, useEffect } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button, Col, DatePicker, Row, Select, Space } from 'antd';

const Search: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    const [region, setRegion] = useState<string>('');

    return (
        <Row className="my-3">
            <Col offset={3} span={18} className="site_content-search">
                <div className="search-bg"></div>
                <div className="search-content">
                    <Row className="search-content-text">
                        <Col span={24}>
                            <p>
                                <span className="heading">Resorts</span>
                                <br/>
                                Treat yourself! Your dream resort stay is just a few clicks away!
                            </p>
                        </Col>
                    </Row>

                    <Row className="search-content-select">
                        <Col md={21} sm={24}>
                            <CountryDropdown
                                value={country}
                                onChange={(val) => setCountry(val)}
                            />
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={(val) => setRegion(val)}
                            />
                            
                            <Space direction="vertical" size={12}>
                                <DatePicker.RangePicker />
                            </Space>

                            <Select
                                showSearch
                                className="select"
                                placeholder="Select property type"
                                optionFilterProp="children"
                            >
                                <Select.Option value="single">Single</Select.Option>
                                <Select.Option value="double">Double</Select.Option>
                            </Select>
                        </Col>

                        <Col md={3} sm={24}>
                            <Button block type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default Search;