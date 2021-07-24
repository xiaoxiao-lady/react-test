import React from "react";
import ReactDOM from "react-dom";
// react只是负责逻辑的控制，react-dom负责最后的渲染
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
// 订阅，store改变的时候页面重新渲染
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,

//     document.getElementById("root")
//   );
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
