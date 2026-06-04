import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/Todocontext'

function TodoForm() {

    const [todo, setTodo] = useState("")

    const { addTodo } = useTodo()

    const add = (e) => {

        e.preventDefault()

        if (!todo) return;

        addTodo({ todo, completed: false })

        setTodo("")
    }

    return (

        <form
            onSubmit={add}
            className="flex items-center gap-3"
        >

            <input
                type="text"
                placeholder="Enter your futuristic task..."
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300"
            >
                Add
            </button>

        </form>
    );
}

export default TodoForm;