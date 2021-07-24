// 生命周期
import React, { Component } from "react";

export default class lifeCycle extends Component {
  constructor(props) {
    super(props);
    //常见于初始化状态
    console.log("1,组件构造函数执行");
  }
  componentWillMount() {
    // 此时可以访问状态和属性，可进行api调用
    console.log("2,组件将要挂载");
  }
  componentDidMount() {
    // 组件已经挂载可以进行状态的更新操作
    console.log("3,组件已挂载");
  }
  componentWillReceiveProps() {
    // 父组件传递的属性有变化做相应的响应
    console.log("4,将要接收组件传递");
  }
  shouldComponentUpdate() {
    // 组价是否需要更新，需要返回布尔值的结果，优化点
    console.log("5,组件是否需要更新");
    return true;
    //返回false后面的生命周期就不用执行了
  }
  componentWillUpdate() {
    // 组件将要更新，可做更新的统计
    console.log("6,组件将要更新");
  }
  componentDidUpdate() {
    // 组件更新
    console.log("7,组件已更新");
  }
  componentWillUnmount() {
    // 组件将要卸载，可做清理的工作
    console.log("8,组件将要卸载");
  }
  render() {
    console.log("组件渲染");
    return <div></div>;
  }
}
