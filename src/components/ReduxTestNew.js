// 【重构的store结构】
import { connect } from "react-redux";
import { add, reduce, asyncAdd } from "../store/redux-redcur-action.js";
import React, { Component } from "react";
// mapStateToProp用来解析state（使用的箭头函数）
// const mapStateToProp = (state) => ({ num: state }); //num是为state起的名字，state是传值
const mapStateToProp = (state) => ({ num: state.counter }); //num是为state起的名字，state是传值
// mapReducerToProp用来解析Reducer
const mapReducerToProp = {
  add,
  reduce,
  asyncAdd,
};
// asyAdd就是处理异步的方式，返回的是一个函数，函数内部写的是异步的函数
@connect(mapStateToProp, mapReducerToProp)
//connect组件也是一个高阶组件，作用就是要把传进去的值，
// 变成要装饰的组件ReduxTest的属性，不同的是他本是还是一个函数，所以需要我们使用的时候调用一下
class ReduxTestNew extends Component {
  render() {
    const { num, add, reduce, asyncAdd } = this.props;
    return (
      <div>
        <p>{num}</p>
        <div>
          <button onClick={reduce}>-</button>
          <button onClick={add}>+</button>
          <button onClick={asyncAdd}>async+</button>
        </div>
      </div>
    );
  }
}
export default ReduxTestNew;
