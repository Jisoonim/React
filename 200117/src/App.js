import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWrapper from './components/Counter/CountWrapper';
import TodoWrapper from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
    <CounterWrapper></CounterWrapper>
    <TodoWrapper></TodoWrapper>
    </div>
  );
}

export default App;
