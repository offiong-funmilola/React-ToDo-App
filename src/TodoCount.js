import { useContext } from "react";
import TodoContext from "./Context/TodoContext";

const styling = {
    backgroundColor: 'coral',
    color: 'white',
    width: '200px',
    height: '50px',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default function TodoCount() {
    const {todos} = useContext(TodoContext);
    return (
        <p style={styling}>The total todos: {todos.length}</p>
    );
}