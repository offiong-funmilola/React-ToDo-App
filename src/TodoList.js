
import React from "react";
import {useContext} from 'react';
import TodoContext from './Context/TodoContext';

 const styling = {
    width: '100%',
    display: 'flex',
    textAlign: 'center'
 }
export default function TodoList() {
    const {todos, selections, dispatch} = useContext(TodoContext);
    
    return (
        <ul className="list-wrapper">
            {todos.map((todo) => (
                <li key={todo} className="list-item">
                    <div style={styling} >
                        <input type='checkbox' checked={selections.includes(todo)} onChange={(e)=> {dispatch({type: 'updateSelections', payload: todo})}} className='space'/>
                        <p className={selections.includes(todo) ? 'check' : null}>{todo}</p>
                        <div className="button-wrapper">
                            <button type="button" className="button" onClick={(e) => {dispatch({type: 'editTodo', payload: todo})}}>Edit</button>
                            <button type="button" className="button" onClick={(e) => {dispatch({type: 'deleteTodo', payload: todo})}}>Delete</button>
                        </div>
                    </div>
                            
                </li>
            ))}
        </ul>
       
    );
}
