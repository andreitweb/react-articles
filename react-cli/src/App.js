import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { pageList } from './pages';
import { BaseLayout } from './layouts/base';

const BaseLayoutRoute = ({component: Component, ...props}) => (
  <Route {...props} render={matchProps => (
    <BaseLayout>
      <Component {...matchProps} />
    </BaseLayout>
  )} />
);

function App() {
  return (
    <Router>
      <Switch>
        {pageList.map(({name, layout, ...props}) => {
          switch (layout) {
            case 'base': return <BaseLayoutRoute key={name} {...props}/>;
            default: return null;
          }
        })}
      </Switch>
    </Router>
  );
}

export default App;

BaseLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
  props: PropTypes.object,
};