// hook案例
import React, { useState, useEffect } from "react";
function useAge() {
  const [age, setAge] = useState(10);
  useEffect(() => {
    setAge(20);
  });
  return age;
}

export default function HOOKTest() {
  // useEffect(() => {
  //   document.title = `你点击了${count}次`;
  // }); //副作用钩子会在每次渲染时（状态改变时）执行
  // useEffect(() => {
  //   document.title = `你点击了${count}次`;
  // }, []); //第二个参数设置为空数组，就只会执行一次

  // useState(initState);
  const age = useAge();
  const [count, setCount] = useState(0);
  const [ages] = useState(20);
  const [fruit, setFruit] = useState("banana");
  const [input, setInput] = useState("");
  const [fruits, setFruits] = useState(["alpple", "banana"]);

  return (
    <div>
      <p>点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <p>年龄：{age ? age : 10}岁</p>
      <p>水果：{fruit}</p>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setFruits([...fruits, input])}>新增水果</button>
      </div>
      <ul>
        {fruits.map((ele, index) => (
          <li key={index} onClick={() => setFruit(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
}
