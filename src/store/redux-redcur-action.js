// 主要是用于放置reducer和action操作的（项目比较大的时候也可以把他们细分一下）
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};

// action放置
export const add = () => ({ type: "add" });
export const reduce = () => ({ type: "reduce" });
export const asyncAdd = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "add" });
  }, 1000);
};
