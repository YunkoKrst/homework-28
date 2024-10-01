import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';  

function App() {
  const [todos, setTodos] = useState([]);  // Стан для збереження списку завдань

  // Додавання нового завдання
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),  
      text: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);  // Додаємо нове завдання до початку списку
  };

  // Видалення завдання
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));  
  };

  // Позначення завдання як виконаного
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />  {/* Компонент форми для додавання завдань */}
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />  {/* Список завдань */}
    </div>
  );
}

export default App;