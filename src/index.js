import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 11:34AM" />
      <CommentDetail author="Alex" timeAgo="Today at 02:34PM" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 10:34PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
