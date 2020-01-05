import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useStateValue } from '../state';

const UnauthenticatedRoute: React.FC<RouteProps> = props => {
  const [ { isAuthenticated } ] = useStateValue();
  const { component, ...rest } = props;

  const Component: any = component;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )}
    />
  );
};

export default UnauthenticatedRoute;
