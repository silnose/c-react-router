import React from "react";
import { render } from "react-dom";
import Home from "../pages/components/home";
import Videos from "../pages/containers/videos";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../pages/components/header.js";
import Contact from "../pages/components/contact";
import NotFound from "../pages/components/not-found.js";

// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

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

const homeContainer = document.getElementById("home-container");

render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact strict />
          <Route path='/videos/:id' component={Videos} exact />
          <Route path='/videos' component={Videos} exact />
          <Route path='/contact ' component={Contact} exact />
          <Redirect from='/c' to='/videos' />
          <Route component={NotFound}></Route>
        </Switch>
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  homeContainer
);
