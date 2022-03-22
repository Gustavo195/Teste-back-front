import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import "./custom.css";
import store from "./store";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/fetch-data" component={FetchData} />
        </Layout>
      </Provider>
    );
  }
}
