import React from 'react';
import { Avatar, Card, Rate } from 'antd';

const LandingPageCard = (props: any) => {
    const property = props.property;

    return (
        <Card
            cover={
                <img
                    alt={property.title}
                    src={property.image}
                />
            }
        >
            <Rate disabled defaultValue={property.rating} />
            <p>{property.description}</p>
            <Card.Meta
                avatar={<Avatar src={property.avatar} />}
                title={property.username}
                description={property.country}
            />
        </Card>
    )
}

export default LandingPageCard;