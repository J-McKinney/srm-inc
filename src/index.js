import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/srm-inc" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/srm-inc/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
