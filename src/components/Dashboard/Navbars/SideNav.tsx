import React from 'react';
import { Layout, Menu } from 'antd';

const SideNav = (props: any) => {
    return (
        <Layout.Sider width={220} className="dashboard_sider">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                className="menu"
            >
                <Menu.Item key="1">Account</Menu.Item>
                <Menu.SubMenu key="sub1" title="Property">
                    <Menu.Item key="2">Add Property</Menu.Item>
                    <Menu.Item key="3">My Properties</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    )
}

export default SideNav;