import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import './App.css';
import { TodoProvider } from './TodoContext';

// yarn add styled-components
// yarn add react-icons

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#e9ecef;
  }
`;

function App() {
  return (
    <div>
      <TodoProvider>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
