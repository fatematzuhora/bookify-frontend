import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button, Col, DatePicker, message, Row, Select, Space } from 'antd';
import { searchProperties } from 'services/property.service';
import { SearchPropertyDTO } from 'models/property.model';
import { SearchPage } from 'pages';

const onSearch = (
    data: SearchPropertyDTO
) => {
    searchProperties(data)
    .then((res) => {
        ReactDOM.render (
            <SearchPage properties={res.properties}/>,
            document.getElementById('site_content')
        )
    })
    .catch((err) => {
        if (err.error !== '') {
            message.error(err.message);
        }
    });
}

const Search: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [type, setType] = useState<string>('');

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
                                onChange={(val: string) => setCountry(val)}
                            />
                            <RegionDropdown
                                country={country}
                                value={city}
                                onChange={(val: string) => setCity(val)}
                            />
                            
                            <Space direction="vertical" size={12}>
                                <DatePicker.RangePicker />
                            </Space>

                            <Select
                                showSearch
                                className="select"
                                placeholder="Select property type"
                                optionFilterProp="children"
                                onChange={(val: string) => setType(val)}
                            >
                                <Select.Option value="single">Single</Select.Option>
                                <Select.Option value="double">Double</Select.Option>
                            </Select>
                        </Col>

                        <Col md={3} sm={24}>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                onClick={() => onSearch({type, country, city})}
                            >
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