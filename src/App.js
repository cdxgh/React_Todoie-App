import React from "react";

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import './style.css';

const App = () => {
  return (
    <div ClassName="todo-container">
      <Header/>
      <TodoItem/>
      <Button/>
    </div>
  );
};
export default App;
