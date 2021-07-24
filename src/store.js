// 【原始的redux管理state】开始
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //引入输出日志的插件
import thunk from "redux-thunk"; //引入处理异步的插件
// 处理state的
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counterReducer, applyMiddleware(logger, thunk));
//createStore中导入logger和thunk
export default store;
// 【原始的redux管理state】结束
