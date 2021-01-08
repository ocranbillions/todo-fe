import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className='container'>
     <TodoForm/>
     <TodoList/>
    </div>
  )
}

export default Todo;