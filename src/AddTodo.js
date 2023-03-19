import React from 'react';
import TodoContext from './Context/TodoContext';
import {useContext} from 'react';

export default function AddTodo() {
    const {text, index, dispatch}= useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(index === null){
          dispatch({
            type: 'createTodo',
            payload: `${text}`
         });
        }
        else {
          dispatch({type: 'saveEdittedTodo', payload: `${text}`})
        }
        dispatch({type: 'clearText'})
      };

    return(
        <form onSubmit={handleSubmit} className="form">
            <input type="text" className="input" value={text} onChange={(e) => {dispatch({type: 'getText', payload: e.target.value})}} />
            <button type="submit" className="submit">{index !== null ? 'update Todo' : 'Add Todo'}</button>
        </form>
    );
}
