import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import { SideNav, TopNav } from 'components/Dashboard';
import { NotFound } from 'layouts';
import { Layout } from 'antd';
import { connect } from 'react-redux';

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
    if (!props.authData.is_logged_in)
        return <Redirect from="/" to="/auth/signin" />;

    return (
        <Layout className="dashboard">
            <Layout.Header className="dashboard_header">
                <TopNav/>
            </Layout.Header>

            <Layout>
                <SideNav
                    {...props}
                    routes={routes}
                    logo={{
                        innerLink: '/dashboard/',
                        imgAlt: '...'
                    }}
                />
                
                <Layout.Content className="dashboard_content">
                    <Switch>
                        {getRoutes(routes)}
                        <Route path='*' exact={true} component={NotFound} />
                    </Switch>
                </Layout.Content>
            </Layout>

            <Layout.Footer className="dashboard_footer">
                Bookify © {new Date().getFullYear()}
            </Layout.Footer>
        </Layout>
    )
}

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})

export default connect(mapStateToProps, null)(DashboardLayout);