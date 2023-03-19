const reducer = (state, action) => {
    switch(action.type){
        case 'getText':
            return{...state, text: action.payload};
        case 'createTodo':
            if(action.payload === '') {
                return{...state, todos: state.todos}
            }
            return{...state, todos: [...state.todos, action.payload]};
        case 'clearText':
            return{...state, text: ''};
        case 'updateSelections':
            let currentSelections = [...state.selections]
            if (state.selections.includes(action.payload)) {
                currentSelections = state.selections.filter(it => it !== action.payload)
            } else {
                currentSelections.push(action.payload)
            }
            return{...state, selections: currentSelections};
            case 'deleteTodo':
                 let currentTodos = [...state.todos];
                if(state.todos.includes(action.payload)) {
                    currentTodos = state.todos.filter(todo => todo !== action.payload);
                }
                return{...state, todos: currentTodos};
            case 'editTodo':
                 state.text = action.payload;
                let startIndex = state.todos.indexOf(action.payload)
                let updatedTodos = [...state.todos];
                if(state.todos.includes(action.payload)){
                 updatedTodos.splice(startIndex, 1);
                }
                return{...state, index: startIndex, todos: updatedTodos};
            case 'saveEdittedTodo':
                let newTodos = [...state.todos];
                newTodos.splice(state.index, 0, action.payload);
                return{...state, index: null, todos: newTodos }
        default:
        return state;        
    }
   
}
export default reducer;