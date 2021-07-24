import React, { Component } from "react";
// export  default function  components(params){
//   return{
//     <div>{params.name}</div>
//   }
// }
// // 类的形式
export default class Clock extends Component {
  state = {
    date: new Date(),
    counter: 0,
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      this.setState({
        date: new Date(),
      });
      this.setState({
        date: new Date(),
      });
      // 批量操作的时候只有第一个会生效
      // 函数式的写法,批量操作的时候会保存前面的结果
      this.setState((prevState) => {
        return {
          counter: prevState.counter,
        };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <div> {this.state.date.toLocaleTimeString()}</div>
        {/* toLocaleTimeString只是为了将时间对象转化为字符串的 */}
        {/* 输出不能是一个对象 */}
        <div>{this.props.name}</div>
      </div>
    );
  }
}
