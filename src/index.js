import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store/index";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
