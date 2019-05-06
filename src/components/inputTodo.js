import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../redux/actions/todo";
import uuidv4 from "uuid/v4";
class InputTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todoError: ""
    };
  }

  handleChange = e => {
    this.setState({ todo: e.target.value, todoError: "" });
  };

  validate = () => {
    const { todo } = this.state;
    let isError = false;
    const error = {
      todoError: ""
    };
    if (todo.length === 0) {
      isError = true;
      error.todoError = "Please Fill Todo";
    }
    this.setState({
      ...this.state,
      ...error
    });
    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      const data = {
        id: uuidv4(),
        title: this.state.todo,
        complete: false
      };
      //console.log(data);
      this.props.dispatch(createTodo(data));
      this.setState({ todo: "" });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="todoInput">
            <input
              type="text"
              placeholder="What needs to be Done ?"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </div>
          <span>{this.state.todoError}</span>
        </form>
      </>
    );
  }
}

export default connect()(InputTodo);
