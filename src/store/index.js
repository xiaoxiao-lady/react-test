// 【原始的redux管理state】开始
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger"; //引入输出日志的插件
import thunk from "redux-thunk"; //引入处理异步的插件
import { counterReducer } from "./redux-redcur-action.js";
import { userReducer } from "./redux-user-reducer.js";
const store = createStore(
  combineReducers({ counter: counterReducer, user: userReducer }), //分模块之后通过的是combineReducers结合对象的形式传入的
  applyMiddleware(logger, thunk) //logger就是控制台打印的功能
);
//createStore中导入logger和thunk
export default store;
// 【原始的redux管理state】结束
