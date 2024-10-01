
import React from 'react';

function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;