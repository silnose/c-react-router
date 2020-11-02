import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Redirect, Route, Switch } from "react-router-dom";
import reducer from "../../reducers/index";
import Header from "../components/header.js";
import Home from "../components/home";
import Videos from "../containers/videos";
import Contact from "../components/contact.js";
import NotFound from "../components/not-found.js";
import Video from "../containers/video.js";

const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact strict />
            <Route path='/videos/:id' component={Video} exact />
            <Route path='/videos' component={Videos} exact />
            <Route path='/contact' component={Contact} exact />
            <Redirect from='/v' to='/videos' />
            <Redirect from='/v/:id' to='/videos/:id' />
            <Route component={NotFound}></Route>
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
