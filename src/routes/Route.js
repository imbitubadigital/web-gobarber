import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '~/pages/_layouts/default';
import AuthLayout from '~/pages/_layouts/auth';

import { store } from '~/store';

export default function RouteWeapper({
  component: Component,
  isPrivate = false,
  typeLayout,
  ...rest
}) {
  const { signed } = store.getState().auth;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }



  // const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWeapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  typeLayout: PropTypes.string,
};

RouteWeapper.defaultProps = {
  isPrivate: false,
  typeLayout: null,
};
