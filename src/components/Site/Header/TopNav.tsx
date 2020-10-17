import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Menu } from 'antd';

const TopNav: React.FC = () => {
    return (
        <Row justify="space-between" className="site_header-topnav">
            <Col>
                <a href="/">
                    <div className="logo">
                        Bookify
                    </div>
                </a>
            </Col>
            <Col>
                <Menu mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className="menu-item"
                >
                    <Menu.Item key="1">
                        <span>Home</span>
                        <Link to="/site" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span>Sign In</span>
                        <Link to="/auth/signin" />
                    </Menu.Item>
                    <Menu.Item key="3">
                        <span>Sign Up</span>
                        <Link to="/auth/signup" />
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    )
}

export default TopNav;