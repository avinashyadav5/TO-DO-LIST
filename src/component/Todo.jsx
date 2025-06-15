import React from 'react';

function Todo({ todo, index,delTodo }) {
  return (
    <div className="item">
      <p className="item-content">{todo}</p>
      <div className="item-actions">
        <input type="checkbox" />
        <button onClick={()=>delTodo(index)} className="deletebtn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
