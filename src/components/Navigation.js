// 生命周期的例子
import React from "react";
import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux"; //主要是吧redux里面的值变成组件的属性
import { login } from "../store/redux-user-reducer.js";
const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
  loading: state.user.loading,
});
const mapReducerToProps = { LoginFun: login };
function About() {
  return <div>关于我们</div>;
}
function Home() {
  return <div>首页</div>;
}
const Login = connect(
  mapStateToProps,
  mapReducerToProps
)(({ location, isLogin, LoginFun, loading }) => {
  const redirect = location.state.redirect || ""; //props是路由对象
  // isLogin表示的是是否已经登录
  if (isLogin) {
    <Redirect to={redirect}></Redirect>;
  }
  return (
    <div>
      <p>用户登录</p>
      <button onClick={LoginFun} disabled={loading}>
        {loading ? "登录中" : "登录"}
      </button>
      {/* LoginFun是通过redux里面传进来的 */}
    </div>
  );
});

// 这个直接写在参数里面里面;
// privateRoute封装想要的守卫的路由公用函数
const PrivateRoute = connect(mapStateToProps)(
  ({ component: Comp, isLogin, ...rest }) => {
    // isLogin本身在props里面是没有的，但是经过connect把state里面的islogin变成props里面的属性
    // render和component的区别就是render可以根据条件动态的渲染组件
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin ? (
            <Comp></Comp>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { redirect: props.location.pathname },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  }
);
export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        {/* <Link to="login">登录</Link> */}
        {/* //注意这个Link不能写在Switch的里面 */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          {/* //参数还是正常的参数，只是经过封装的路由会判断是进入登录页面还是to后面的页面 */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
