import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayout, DashboardLayout, SiteLayout } from 'layouts';

const App: React.FC = (props: any) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/site" render={props => <SiteLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout  {...props} />} />
        <Route path="/dashboard" render={props => <DashboardLayout  {...props} />} />

        <Redirect from="/" to="/site" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
