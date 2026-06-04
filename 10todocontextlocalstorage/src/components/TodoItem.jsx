import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/Todocontext'

function TodoItem({ todo }) {

    const {
        updatedTodo,
        deleteTodo,
        toggleTodo
    } = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const editTodo = () => {

        if (!todoMsg) return;

        updatedTodo(todo.id, {...todo,todo: todoMsg})

        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleTodo(todo.id)
    }

    return (

        <div
            className={`group relative flex items-center gap-x-4 rounded-3xl border border-white/10 px-5 py-5 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                todo.completed
                    ? "bg-green-500/20 shadow-green-500/20"
                    : "bg-white/10 shadow-cyan-500/10"
            }`}
        >

            {/* Checkbox */}
            <input
                type="checkbox"
                className="w-5 h-5 accent-cyan-400 cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            {/* Todo Input */}
            <input
                type="text"
                className={`w-full bg-transparent outline-none text-lg font-medium transition-all duration-300 rounded-xl px-2 py-1 ${
                    isTodoEditable
                        ? "border border-cyan-400 text-cyan-300"
                        : "border border-transparent"
                } ${
                    todo.completed
                        ? "line-through text-gray-400"
                        : "text-white"
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit Button */}
            <button
                className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-40"
                onClick={() => {

                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }

                }}

                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Button */}
            <button
                className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>

        </div>
    );
}

export default TodoItem;