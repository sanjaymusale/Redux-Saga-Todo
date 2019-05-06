import React from "react";

// import Todo from './Todo';
// import ListTodo from './ListTodo';
import "./style/style.css";
import Header from "./components/header";
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="todoBox">
        <InputTodo />
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
