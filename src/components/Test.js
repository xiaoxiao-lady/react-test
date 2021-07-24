import React from "react";
import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom";
function About(props) {
  return (
    <div>
      <li>
        <Link to="/about/me">个人中心</Link>
      </li>
    </div>
  );
}
function Me() {
  return <div>个人中心</div>;
}
export default function test() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Redirect to="/about"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
