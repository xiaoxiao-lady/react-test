import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>水果系列</h2>
      <ul>
        <li>
          <Link to="/detail/apple">苹果</Link>
        </li>
        <li>
          <Link to="/detail/banana">香蕉</Link>
        </li>
        <li>
          <Link to="/detail/orange">橙子</Link>
        </li>
      </ul>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
// 在路由组价中接收的参数是路由对象
function Detail(props) {
  // props:1.history：导航指令    2.location：当前的url信息  3.match：获取参数信息
  return (
    <div>
      {props.match.params.fruits}
      <button onClick={props.history.goBack}>返回</button>
    </div>
  );
}
// 404页面组件
function NoMatch(props) {
  // props:1.history：导航指令    2.location：当前的url信息  3.match：获取参数信息
  return <div>404 找不到</div>;
}

export default function routerTest() {
  return (
    <div>
      <BrowserRouter>
        {/* 导航链接 */}
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about"> 关于</Link>
          </li>
          <li>
            <Link to="/detail"> 详情</Link>
          </li>
        </ul>
        <Switch>
          {/* 路由配置:路由也是组件 */}
          exact是为了不嵌套，比如/about这种页面内容没有/的内容
          {/* <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/detail/:fruits" component={Detail}></Route> */}
          <Route path="/detail" component={Detail}></Route>
          {/* 404页面 */}
          <Route component={NoMatch}></Route>
          {/* 重定向 */}
          <Redirect to="/detail/one"></Redirect>
          {/* 明天写 */}
        </Switch>
        {/* //Switch的作用就是始终匹配一个，只显示一个 */}
      </BrowserRouter>
    </div>
  );
}
