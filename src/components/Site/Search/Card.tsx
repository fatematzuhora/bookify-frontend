import React from 'react';
import { Col, Image, Rate } from 'antd';

const SearchPageCard = (props: any) => {
    const property = props.property;

    return (
        <>
            <Col span={8} className="my-1">
                <Image
                    className="mx-2"
                    width="100%"
                    src={property.image ? property.image : require('assets/img/no-image.jpg')}
                />
            </Col>
            <Col span={16} className="my-1">
                <h1>{property.title}</h1>
                <Rate disabled defaultValue={property.rating} />
                <p>{property.description}</p>
                
                <h4>Price: €{property.price}</h4>
                <h4>Type: {property.type}</h4>
                <h4>{property.country}</h4>
                <h4>{property.city}</h4>
            </Col>
        </>
    )
}

export default SearchPageCard;