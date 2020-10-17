import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { NotFound } from 'layouts';
import { Layout } from 'antd';
import { Search, TopNav } from 'components/Site';
import { connect } from 'react-redux';

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
        <Layout className="site">
            <Layout.Header className="site_header">
                <TopNav/>
            </Layout.Header>

            <Layout.Content className="site_content">
                <Search/>
                
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

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})
  
export default connect(mapStateToProps, null)(SiteLayout);