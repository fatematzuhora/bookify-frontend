import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { NotFound } from 'layouts';
import { Layout } from 'antd';
import { Search, TopNav } from 'components/Site';

const getRoutes = (routes: any) => {
    const all_routes: any = [];

    routes.map((route: any) => {
        if (route.layout === '/auth') {
            all_routes.push({
                path: route.layout + route.path,
                component: route.component
            })
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

const AuthLayout = (props: any) => {
    return (
        <Layout className="site">
            <Layout.Header className="site_header">
                <TopNav/>
                <Search/>
            </Layout.Header>

            <Layout.Content className="auth">
                <Switch>
                    {getRoutes(routes)}
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            </Layout.Content>

            <Layout.Footer className="site_footer">
                Bookify © {new Date().getFullYear()} - Small ReactJS application for travel.
            </Layout.Footer>
        </Layout>
    )
}

export default AuthLayout;