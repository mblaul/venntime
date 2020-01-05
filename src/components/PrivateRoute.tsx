import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { StateContext } from '../state';

class PrivateRoute extends Component<RouteProps> {
  static contextType = StateContext;

  render() {
    const { component, ...rest } = this.props;
    const Component: any = component;

    const [ { isAuthenticated } ] = this.context;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: this.props.location },
              }}
            />
          )}
      />
    );
  }
}

export default PrivateRoute;
