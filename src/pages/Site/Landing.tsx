import React from 'react';
import { Col, Row } from 'antd';
import { LandingPageCard } from 'components/Site';
import { data } from 'data/api.json';

const LandingPage: React.FC = () => {
    const properties= data;

    return (
        <Row>
            <Col offset={2} span={20}>
                <Row>
                    {
                        Object.values(properties).map((property, index) => {
                            return (
                                <Col sm={24} md={8}>
                                    <LandingPageCard property={property} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default LandingPage;