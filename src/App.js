// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import { Provider } from "react-redux";
import Clock from "./components/Clock.js";
import CartSample from "./components/CartSample";
import LifeCycle from "./components/lifeCycle.js";
import Antdtest from "./components/Antdtest.js";

import "antd/dist/antd.css";
import HOC from "./components/HOC.js";
import Decorator from "./components/Decorator.js";
import Composition from "./components/Composition.js";
import Operateprops from "./components/Operateprops.js";
// import HOOKTest from "./components/HOOKTest.js";
import ContextTest from "./components/ContextTest.js";
import AntdForm from "./components/AntdForm.js";
// import ReduxTest from "./components/ReduxTest.js";
// import store from "./store.js";
import Test from "./components/Test.js";
import store from "./store/index.js";
import ReduxTestNew from "./components/ReduxTestNew.js";
import RouterTest from "./components/RouterTest.js";
import Navigation from "./components/Navigation.js";

function formatName(user) {
  return user.firstName + "&" + user.lastName;
}

const name = "王金玉";
const user = { firstName: "王", lastName: "金玉" };
const jsx = <p>想你啦</p>;

export default class App extends Component {
  state = {
    name: "hahh",
  };
  componentDidMount() {
    this.setState({
      name: "嘻嘻",
    });
  }
  render() {
    return (
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1> */}
        {/* <h1>{formatName(user)}</h1> */}
        {/* 属性的,不用加"" ,style第二个{}是表示的对象，设置多个样式*/}
        {/* <img src={logo} alt="" style={{ width: "100px" }} /> */}
        {/* jsx也是表达式 */}
        {/* {jsx} */}
        {/* 组件 */}
        {/* <Clock name="函数组件传值"></Clock> */}
        {/* 条件与循环 */}
        {/* <CartSample title="百瑞公司"></CartSample> */}
        {/* 生命周期 */}
        {/* <LifeCycle name={this.state.name}> </LifeCycle> */}
        {/* 组件库 */}
        {/* <Antdtest></Antdtest> */}
        {/* 高阶组件 */}
        {/* <HOC></HOC> */}
        {/* 装饰器 */}
        {/* <Decorator></Decorator> */}
        {/* 组件复合 */}
        {/* <Composition></Composition> */}
        {/* 组件复合--操作插槽 */}
        {/* <Operateprops></Operateprops> */}
        {/* HOOK */}
        {/* <HOOKTest></HOOKTest> */}
        {/* 跨组件通信 */}
        {/* <ContextTest></ContextTest> */}
        {/* 模拟antd的form表单 */}
        {/* <AntdForm></AntdForm> */}
        {/* redux-状态管理 */}
        {/* <Provider store={store}>
          <ReduxTest></ReduxTest>
        </Provider> */}
        {/* redux-状态管理-重构 */}
        {/* <Provider store={store}>
          <ReduxTestNew></ReduxTestNew>
        </Provider> */}
        {/* 路由的处理 */}
        {/* <RouterTest></RouterTest> */}
        {/* <Test></Test> */}
        {/* 导航守卫 */}
        <Provider store={store}>
          <Navigation></Navigation>
        </Provider>
      </div>
    );
  }
}
