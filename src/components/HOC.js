// 高阶组件案例
import React, { Component } from "react";
function Wang(props) {
  return (
    <div>
      {props.stage}-{props.name}
    </div>
  );
}
// withWang接收一个组件返回一个新的组件
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
      return <Comp {...this.props} name={name}></Comp>;
    }
  };
};
const withLog = (Comp1) => {
  console.log("三次加工");
  return (props) => <Comp1 {...props}></Comp1>;
};
const NewWang = withWang(withLog(Wang));
export default class HOC extends Component {
  render() {
    return (
      <div>
        {/* <Wang name="王金玉"></Wang> */}
        <NewWang stage="博地"></NewWang>
      </div>
    );
  }
}
