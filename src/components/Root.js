import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './Dashboard/DashboardContainer'
import SearchDashboard from './SearchDashboard/SearchDashboardContainer'
import Shopcart from './Shopcart/ShopcartContainer'
import DetailedProduct from './DetailedProduct/DetailedProductContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <Router>
          <Switch>
            <Route exact path="/" exact>
              <Dashboard />
            </Route>
            <Route exact path="/products" exact>
              <SearchDashboard />
            </Route>
            <Route path="/products/:id" exact>
              <DetailedProduct />
            </Route>
            <Route path="/user/shopcart" exact>
              <Shopcart />
            </Route>
            <Route path="*">
              <Dashboard />
            </Route>
          </Switch>
      </Router>
    </SnackbarProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
