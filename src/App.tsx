import React, { useState } from 'react';

import { Todo } from './models/todo.model';

import TodoList from './components/todo-list/TodoList';
import NewTodo from './components/new-todo/NewTodo';

import { createTodoId } from './utils';

//FC for function component
//FC receives <T> generics, where T is its PropType 
const App: React.FC = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    let newTodo = {
      id: createTodoId(),
      text
    }
    //better practice: it guarantees that the previous state is the newest to be used
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }
  
  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={ todoAddHandler } />
      <TodoList items={ todos } onDeleteTodo={ todoDeleteHandler }/>
    </div>
  );
}

export default App;
