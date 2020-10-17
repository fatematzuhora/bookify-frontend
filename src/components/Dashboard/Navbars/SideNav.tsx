import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const SideNav = (props: any) => {
    return (
        <Layout.Sider width={220} className="dashboard_sider">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                className="menu"
            >
                <Menu.Item key="1">
                    <Link to="/dashboard/profile">Account</Link>
                </Menu.Item>
                <Menu.SubMenu key="sub1" title="Property">
                    <Menu.Item key="2">
                        <Link to="/dashboard/property/add">Add Property</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/dashboard/property/list">My Properties</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    )
}

export default SideNav;