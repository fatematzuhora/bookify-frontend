import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { SideNav, TopNav } from 'components/Dashboard';
import { NotFound } from 'layouts';
import { Layout } from 'antd';

const getRoutes = (routes: any) => {
    const all_routes: any = [];

    routes.map((route: any) => {
        if (route.layout === '/dashboard') {
            if (route.type === 'submenu') {
                route.child.map((submenu: any) => {
                    all_routes.push({
                        path: submenu.layout + submenu.path,
                        component: submenu.component
                    })
                })
            } else if (route.type === 'menu') {
                all_routes.push({
                    path: route.layout + route.path,
                    component: route.component
                })
            }
        }
    })
    
    return all_routes.map((props: any, key: number) => {
        return (
            <Route
                path={props.path}
                component={props.component}
                key={key}
            />
        )
    })
};

const DashboardLayout = (props: any) => {
    return (
        <Layout className="dashboard">
            <SideNav
                {...props}
                routes={routes}
                logo={{
                    innerLink: '/dashboard/',
                    imgAlt: '...'
                }}
            />

            <Layout>
                <TopNav/>

                <Layout.Content className="content">
                    <Switch>
                        {getRoutes(routes)}
                        <Route path='*' exact={true} component={NotFound} />
                    </Switch>
                </Layout.Content>

                <Layout.Footer className="footer">
                    Bookify ©{new Date().getFullYear()}
                </Layout.Footer>
            </Layout>
        </Layout>
    )
}

export default DashboardLayout;