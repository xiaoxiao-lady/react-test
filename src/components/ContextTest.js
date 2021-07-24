import React, { useContext } from "react";
// 1.创建上下文
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
function Child(props) {
  return <div>{props.foo}</div>;
}
function Child2(props) {
  const ctx = useContext(MyContext); //可以获取父级组件的传值
  return <div>{ctx.foo}</div>;
}
class Child3 extends React.Component {
  static contextType = MyContext; //设置静态的contextType
  render() {
    return <div>{this.context.foo}</div>; //context是固定接收父级组件的传值
  }
}

export default function ContextTest() {
  return (
    <div>
      {/* 2.父辈组件注入传值 */}
      <Provider value={{ foo: "bar" }}>
        {/* 3.1方式一：通过consumer接收传值给子集组件 */}
        <Consumer>{(value) => <Child {...value}></Child>}</Consumer>
        {/* 3.2方式二：使用useContext---hook的方式 */}
        <Child2></Child2>
        {/* 3.3方式三：使用class制定静态的contxtType的方式 */}
        <Child3></Child3>
      </Provider>
    </div>
  );
}
