import { ACTION } from "./Todolist";

export default function Todos({ todos, dispatch }) {
    return (
        <li key={todos.id}>
            <span style={{ textDecoration: todos.complete ? 'line-through' : 'none' }}>
                {todos.name}
            </span>
            <button 
                onClick={() => 
                    dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todos.id } })
                }
            >
                {todos.complete ? 'Undo' : 'Complete'}
            </button>
            <button 
                onClick={() => 
                    dispatch({ type: ACTION.DELETE_TODO, payload: { id: todos.id } })
                }
            >
                Delete
            </button>
        </li>
    );
}
