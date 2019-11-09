import React from "react";
import { connect } from "react-redux";
import { deleteTodo, completeTodo, completeAll } from "../redux/actions/todo";

class ListTodo extends React.Component {
  handleRemove = id => {
    this.props.dispatch(deleteTodo(id));
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
            <input
              type="checkbox"
              id="markall"
              onChange={this.handleCompleteAll}
            />
            <label for="markall">Mark all as Complete</label>
          </div>
        )}
        <div className="todos">
          <ul>
            {this.props.todos.map((todo, i) => {
              return (
                <li key={i + 1}>
                  <div className="todo-list">
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
                    <div className={`content ${todo.complete ? "complete" : ""}`}>
                      {todo.title}
                    </div>
                    <img
                      src={`${process.env.PUBLIC_URL}/close.png`}
                      width="20px"
                      height="20px"
                      alt="dsdfsd"
                      className="removeTodo"
                      onClick={() => {
                        this.handleRemove(todo.id);
                      }}
                    />
                  </div>
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
