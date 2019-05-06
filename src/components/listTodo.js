import React from "react";
import { connect } from "react-redux";
import { deleteTodo, completeTodo, completeAll } from "../redux/actions/todo";

class ListTodo extends React.Component {
  handleRemove = i => {
    this.props.dispatch(deleteTodo(i));
  };

  handleComplete = e => {
    const status = e.target.checked;
    const id = e.target.value;
    const data = { complete: status, id };
    this.props.dispatch(completeTodo(data));
  };

  handleCompleteAll = e => {
    const status = e.target.checked;
    const data = {
      complete: status
    };
    this.props.dispatch(completeAll(data));
  };
  render() {
    return (
      <>
        {this.props.todos.length !== 0 && (
          <div className="todoCheckBox">
            <input type="checkbox" onChange={this.handleCompleteAll} />
            <span>Mark all as Complete</span>
          </div>
        )}
        <div className="todos">
          <ul>
            {this.props.todos.map((todo, i) => {
              return (
                <li key={i + 1}>
                  {todo.complete ? (
                    <input
                      type="checkbox"
                      onChange={this.handleComplete}
                      value={todo.id}
                      checked="checked"
                    />
                  ) : (
                    <input
                      type="checkbox"
                      onChange={this.handleComplete}
                      value={todo.id}
                    />
                  )}
                  <span className={todo.complete ? "complete" : ""}>
                    {todo.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};
export default connect(mapStateToProps)(ListTodo);
