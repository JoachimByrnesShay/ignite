import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    composeEnhancer(
      applyMiddleware(thunk)
    )
);
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
