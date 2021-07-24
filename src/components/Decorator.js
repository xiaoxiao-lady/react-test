// 装饰器案例
import React, { Component } from "react";

// 高阶组件
const withWang = (Comp) => {
  const name = "二次加工组件";

  // 函数类型的组件
  // return (props) => <Comp {...props} name={name}></Comp>; //return的是函数类型的组件
  // 类类型的组价
  return class newComp extends React.Component {
    componentDidMount() {
      console.log("二次加工生命周期");
    }
    render() {
      return <Comp {...this.props} name2={name}></Comp>;
    }
  };
};
const withLog = (Comp1) => {
  console.log("三次加工");
  const name = "三次加工组件";
  return (props) => <Comp1 {...props} name1={name}></Comp1>;
};
@withWang
@withLog
@withWang
// 原本组件
class Wang extends Component {
  render() {
    return (
      <div>
        {this.props.stage}-{this.props.name1}--{this.props.name2}
      </div>
    );
  }
}
// 调用组件
export default class Decorator extends Component {
  render() {
    return (
      <div>
        {/* <Wang name="王金玉"></Wang> */}
        <Wang stage="博地"></Wang>
      </div>
    );
  }
}
