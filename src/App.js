import React from "react";
import "./style.css";
// import SampleComponent from './SampleComponent';
import Todo from "./Todo";

export default function App() {
  return (
    <>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
    {/* <SampleComponent bgColor="red"/>
    <SampleComponent bgColor="green"/> */}
    <Todo />
    </>
  );
}
