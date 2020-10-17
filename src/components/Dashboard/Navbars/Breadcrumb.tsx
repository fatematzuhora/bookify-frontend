import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbNav = (props: any) => {
    return (
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="">
                {props.parent_name}
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                {props.child_name}
            </Breadcrumb.Item>

        </Breadcrumb>

    )
}

export default BreadcrumbNav;