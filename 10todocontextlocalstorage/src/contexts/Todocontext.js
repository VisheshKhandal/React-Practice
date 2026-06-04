import {createContext , useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: 'Learn React',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
