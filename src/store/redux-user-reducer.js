let init = {
  isLogin: false,
  loading: false,
};
export const userReducer = (state = init, action) => {
  switch (action.type) {
    case "requestLogin":
      return {
        isLogin: false,
        loading: true,
      };
    case "login":
      return {
        isLogin: true,
        loading: false,
      };
    default:
      return state;
  }
};
// requestLogin是异步处理的，所以使用的是disptch
export const login = () => (dispatch) => {
  dispatch({
    type: "requestLogin",
  });
  setTimeout(() => {
    dispatch({
      type: "login",
    });
  }, 1000);
};
