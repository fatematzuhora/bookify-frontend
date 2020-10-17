import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

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
                <Button type="primary">
                    <Link to="/auth/signin">Add Property</Link>
                </Button>
            </Col>
        </Row>
    )
}

export default TopNav;