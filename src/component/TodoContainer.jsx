import React from "react";
import Todo from "./Todo.jsx";

function TodoContainer({ todos, delTodo }) {
  return (
    <div className="scroll-list-container">
      <div className="top-gradient" />
      <div className="scroll-list">
        {todos.length === 0 ? (
          <div className="no-task-wrapper">
            <p className="item-text">No tasks yet.</p>
          </div>
        ) : (
          todos.map((todo, index) => (
            <div className="item" key={index}>
              <Todo todo={todo} index={index} delTodo={delTodo} />
            </div>
          ))
        )}
      </div>
      <div className="bottom-gradient" />
    </div>
  );
}

export default TodoContainer;
