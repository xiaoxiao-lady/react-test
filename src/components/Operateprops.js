// 【操作插槽的props.children案例】
import React, { Component } from "react";
function Operate({ children, ...rest }) {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...rest });
      })}
      {/* {children} */}
    </div>
  );
}
export default function DialogParent() {
  return (
    <div>
      <Operate name="mvvm">
        <h1>喜欢1</h1>
        <h1>喜欢2</h1>
        <h1>喜欢3</h1>
      </Operate>
    </div>
  );
}
