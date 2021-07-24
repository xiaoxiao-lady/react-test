import React, { Component, PureComponent } from "react";
import { Button } from "antd";

export default class Antdtest extends Component {
  state = {
    commentList: [],
  };
  componentDidMount() {
    this.setState({
      commentList: [
        { name: "新闻一", id: 1 },
        { name: "新闻一", id: 2 },
      ],
    });
  }
  render() {
    return (
      <div>
        <Button type="primary">按钮</Button>
        <p title="我是文字提示">图书编号</p>
        {this.state.commentList.map((ele) => (
          <Comment key={ele.id} {...ele}></Comment>
        ))}
      </div>
    );
  }
}

// class Comment extends PureComponent {
//   render() {
//     console.log(0);
//     return <div></div>;
//   }
// }
const Comment = React.memo(function () {
  return <div></div>;
});
