/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import AuthenticatedLayout from '../Layout/Loadable';

import GlobalStyle from '../../global-styles';

import { GeneralContainer } from './styledComponents';

const AppRoute = props => {
  const {
    layout: Layout,
    component: Component,
    viewport,
    requiredAuth,
    path,
    layoutProps,
    title,
    ...rest
  } = props;

  let allowRoute = true;
  if (requiredAuth) {
    allowRoute = requiredAuth(path);
  }
  return (
    <Route
      {...rest}
      render={routeProps =>
        allowRoute ? (
          <Layout
            pathname={routeProps.location.pathname}
            viewport={viewport}
            title={title}
            {...layoutProps}
          >
            <Component viewport={viewport} {...routeProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
  layoutProps: PropTypes.object,
  path: PropTypes.string,
  requiredAuth: PropTypes.func,
  title: PropTypes.string,
  viewport: PropTypes.object,
};

export default function App() {
  return (
    <GeneralContainer>
      <Switch>
        {/* AUTHORIZED PATHS */}
        {/* <Route component={HomePage} exact path="/" title="Home" /> */}

        <AppRoute
          component={HomePage}
          exact
          layout={AuthenticatedLayout}
          path="/"
          title="Home"
        />

        <AppRoute
          component={FeaturePage}
          exact
          layout={AuthenticatedLayout}
          path="/features"
          title="features"
        />

        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </GeneralContainer>
  );
}
