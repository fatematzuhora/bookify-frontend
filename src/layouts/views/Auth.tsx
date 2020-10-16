import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { NotFound } from 'layouts';
import { Layout } from 'antd';

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
        <Layout>
            <Layout.Content>
                <Switch>
                    {getRoutes(routes)}
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            </Layout.Content>
        </Layout>
    )
}

export default AuthLayout;