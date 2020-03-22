import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import _ from "lodash";

const Comp = () => <App />;

ReactDOM.render(<Comp />, document.querySelector("#mains"));
