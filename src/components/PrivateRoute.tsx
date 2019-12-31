import React, { ReactElement, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.Component | React.FC | ReactElement;
  path: string;
  exact: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <div>Logged in</div>
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

export default PrivateRoute;
