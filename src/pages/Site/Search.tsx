import React from 'react';
import { Col, Result, Row } from 'antd';
import { SearchPageCard } from 'components/Site'

const SearchPage = (props: any) => {
    const properties = props.properties;

    return (
        <Row>
            <Col offset={2} span={20}>
                <Row className="my-2">
                    {properties.length > 0 ?
                        properties.map((property: any, index: number) => {
                            return (
                                <SearchPageCard property={property} />
                            )
                        })
                    :
                    <Col offset={8} span={8}>
                        <Result title="Nothing Found"/>
                    </Col>
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default SearchPage;