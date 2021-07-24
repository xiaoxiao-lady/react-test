import React, { Component } from "react";

export default class CartSample extends Component {
  constructor(props) {
    //constructor是一个人类的自动执行的函数
    super(props);
    this.state = {
      goods: [
        { id: 0, name: "王金玉" },
        { id: 1, name: "张文强" },
      ],
      text: "",
      cart: [],
    };
  }
  textChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  addGoods = () => {
    this.setState((preState) => {
      return {
        goods: [
          ...preState.goods,
          { id: preState.goods.length + 1, name: preState.text },
        ],
        // react希望我们在setstate的时候设置的是一个全新的数据，所以
      };
      // preState.goods.push({
      //   id: preState.goods.length + 1,
      //   name: preState.text,
      // });
    });
  };
  addCart = (good) => {
    const newCart = [...this.state.cart];
    const idx = newCart.findIndex((ele) => {
      return ele.id === good.id;
    });
    const item = newCart[idx];
    if (item) {
      newCart.splice(idx, 1, { ...item, count: item.count + 1 });
    } else {
      newCart.push({ ...good, count: 1 });
    }
    console.log(newCart);
    this.setState({
      cart: newCart,
    });
  };
  add = (good) => {
    const newCart = [...this.state.cart];
    console.log(newCart);
    const idx = newCart.findIndex((ele) => {
      return ele.id === good.id;
    });
    const item = newCart[idx];
    console.log(idx);
    newCart.splice(idx, 1, { ...item, count: item.count + 1 });
    console.log(newCart);
    this.setState({
      cart: newCart,
    });
  };
  mins = (good) => {
    const newCart = [...this.state.cart];
    const idx = newCart.findIndex((ele) => {
      return ele.id === good.id;
    });
    const item = newCart[idx];
    newCart.splice(idx, 1, { ...item, count: item.count - 1 });
    console.log(newCart);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    // const title = this.props.title ? <h1>this.props.title</h1> : null;
    return (
      <div>
        {/* 条件循环 */}
        {/* {title} */}
        {this.props.title && <h1>{this.props.title}</h1>}
        {this.props.title ? <h1>{this.props.title}</h1> : ""}
        {/* 循环渲染 */}
        <ul>
          {this.state.goods.map((good) => (
            <li key={good.id}>
              {good.name}
              <button onClick={() => this.addCart(good)}> + </button>
            </li>
          ))}
        </ul>
        {/* 函数的调用 */}
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.textChange}
          />
          <button onClick={this.addGoods}>添加</button>
          {/* //注意：1.牢记不能函数的调用不能加（）2.函数写成箭头函数 */}
        </div>
        {/* 购物车 */}
        <Cart cart={this.state.cart} mins={this.mins} add={this.add}>
          {" "}
        </Cart>
      </div>
    );
  }
}

// 直接在内部申明组件，使用函数式组件的原因是cart组件里面只是执行展示不用处理逻辑
function Cart(params) {
  return (
    <div>
      <ul>
        {params.cart.map((d) => (
          <li key={d.id}>
            <span>{d.id}</span>
            <span>{d.name}</span>
            <span>
              <button onClick={() => params.mins(d)}>-</button>
              {d.count}
              <button onClick={() => params.add(d)}>+</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
