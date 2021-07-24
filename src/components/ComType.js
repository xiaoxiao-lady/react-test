import React from "react";
import { render } from "react-dom";
// 基于函数的组件
export function Welcome1(params) {
  return <div> </div>;
}
// 基于类的组件
export class Welcome2 extends React.Component {
  render() {
    return <div> </div>;
  }
}
