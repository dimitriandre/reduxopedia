import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  return <div style={{ padding: "2em" }}>{count}</div>;
}

export default Counter;
