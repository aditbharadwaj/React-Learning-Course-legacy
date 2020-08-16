import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
          {/*  <BurgerBuilder></BurgerBuilder> */}
        </Layout>
      </div>
    );
  }
}

export default App;
