import { useReducer, useState } from "react";
import Todos from "./Todos";

export const ACTION = {
    NEW_TODO: "new_todos",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo"
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.NEW_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTION.TOGGLE_TODO:
            return todos.map(todo => 
                todo.id === action.payload.id 
                    ? { ...todo, complete: !todo.complete } 
                    : todo
            );
        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

export default function Todolist() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [todoInput, setTodoInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!todoInput.trim()) return; // Prevent empty todos
        dispatch({ type: ACTION.NEW_TODO, payload: { name: todoInput } });
        setTodoInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="bg-gray-100"
                    onChange={(e) => setTodoInput(e.target.value)}
                    value={todoInput}
                    placeholder="Enter a todo"
                />
                <button type="submit" disabled={!todoInput.trim()}>Add Todo</button>
            </form>
            
            <ol>
                {todos.map(todo => (
                    <Todos key={todo.id} todos={todo} dispatch={dispatch} />
                ))}
            </ol>
        </div>
    );
}
