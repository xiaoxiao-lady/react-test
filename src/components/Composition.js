// 【组件复合的案例】
import React, { Component } from "react";
import { Button } from "antd";

function DialogChild(props) {
  return (
    <div style={{ border: `1px  solid ${props.color || "blue"}` }}>
      {props.children}
      <div className="footer">{props.footer}</div>
    </div>
  );
}
const api = {
  getUser() {
    return { name: "王金玉", age: 23 };
  },
};

function SlotScope(props) {
  const user = api[props.name]();
  return props.children(user); //插槽，父组件是传的函数的时候，就是以函数的形式调用
  //作用域插槽就是插槽里面的值，给父组件
}

export default function DialogParent() {
  function click(content) {
    alert(content);
  }
  const footer = (
    <Button type="primary" onClick={() => click("我是插槽")}>
      提交
    </Button>
  );
  return (
    <div>
      {/* // 具名插槽
    // <DialogChild color="red" footer={footer}>
    // </DialogChild> */}
      <SlotScope name="getUser">
        {/* //name就是父亲传给子组件 辨识调用的哪个api */}
        {({ name, age }) => (
          <div>
            <h1>
              {name}-{age}
            </h1>
          </div>
        )}
      </SlotScope>
    </div>
  );
}
