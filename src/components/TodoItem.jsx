import React from 'react';

const TodoItem = () => {
  return (
  <li ClassName="todo-item">
    <span>
    <input type='checkbox'/>
    <span ClassName="todo-item-text">Eat</span>
    </span>
    <p>...</p>
    </li>
  );
};
export default TodoItem;
