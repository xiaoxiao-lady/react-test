import React, { Component } from "react";
// 设置一个高阶组件：扩展现有表单的事件处理、数据收集、校验的功能
function AntdFormDec(Comp) {
  return class extends React.Component {
    render() {
      return <Comp></Comp>;
    }
  };
}
@AntdFormDec
// 原本的组件（将要被装饰器装饰的组件）
class AntdForm extends Component {
  render() {
    return <div></div>;
  }
}
export default AntdForm;
