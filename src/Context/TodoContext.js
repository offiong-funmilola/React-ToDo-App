import {createContext, useReducer} from 'react';
import reducer from '../reducer';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const initialState = {
        text: '',
        todos: [],
        selections: [],
        index: null
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    
    return(
        <TodoContext.Provider value={{todos: state.todos, dispatch, text: state.text, selections: state.selections, index: state.index}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext;
