import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayout, DashboardLayout, SiteLayout } from 'layouts';
import { connect } from 'react-redux';

const App: React.FC = (props: any) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/site" render={props => <SiteLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout  {...props} />} />
        <Route path="/dashboard" render={props => <DashboardLayout  {...props} />} />

        {(props.authData.is_logged_in) ? (
          <Redirect from="/" to="/dashboard/profile" />
        ): (
          <Redirect from="/" to="/site" />
        )}
        
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: any) => ({
  authData: state.auth,
})

export default connect(mapStateToProps, null)(App);
