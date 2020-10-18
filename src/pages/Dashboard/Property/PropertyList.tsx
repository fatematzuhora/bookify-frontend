import React, { useState, useEffect } from 'react';
import { getMyProperties } from 'services/property.service';
import { connect } from 'react-redux';
import { BreadcrumbNav } from 'components/Dashboard';
import { message, Spin, Table } from 'antd';

const PropertyList: React.FC = (props: any) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMyProperties(props.authData.auth_token)
        .then((res) => {
            setProperties(res.properties);
            setLoading(false);
        })
        .catch((err) => {
            if (err.error !== '') {
                message.error(err.message);
            }
        });

    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'description'
        },
        {
            title: 'Price (€)',
            dataIndex: 'price'
        },
        {
            title: 'Type',
            dataIndex: 'type'
        },
        {
            title: 'Country',
            dataIndex: 'country'
        },
        {
            title: 'City',
            dataIndex: 'city'
        },
        {
            title: 'Total Ratings',
            dataIndex: 'ratingsCount'
        }
    ]
  

    if (loading)
        return (<Spin size="large" className="spin"/>);

    return (
        <>
            <BreadcrumbNav parent_name="Property" child_name="List"/>

            <Table
                className="table_data"
                columns={columns}
                dataSource={properties}
            />
        </>
    )
}

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})
  
export default connect(mapStateToProps, null)(PropertyList);