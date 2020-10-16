import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { NotFound } from 'layouts';
import { Layout } from 'antd';
import { Search, TopNav } from 'components/Site';

const getRoutes = (routes: any) => {
    const all_routes: any = [];

    routes.map((route: any) => {
        if (route.layout === '/site') {
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

const SiteLayout = (props: any) => {
    return (
        <Layout>
            <Layout.Header className="header">
                <TopNav/>
                <Search/>
            </Layout.Header>

            <Layout.Content>
                <Switch>
                    {getRoutes(routes)}
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            </Layout.Content>

            <Layout.Footer className="footer">
                Bookify ©{new Date().getFullYear()}
            </Layout.Footer>
        </Layout>
    )
}

export default SiteLayout;