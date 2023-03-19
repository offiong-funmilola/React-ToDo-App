import React from 'react';
import "./style.css";
import TodoCount from './TodoCount';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { TodoProvider } from "./Context/TodoContext";

export default function App() {
    return (
        <TodoProvider>
            <div className='main-wrapper'>
                <h1 className='heading'>Make Today's Todos</h1>
                <TodoList  />
                <TodoCount  />
                <AddTodo  />
            </div>
        </TodoProvider>
    );
}