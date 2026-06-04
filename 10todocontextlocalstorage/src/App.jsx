import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/Todocontext'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (

    <TodoProvider value={{
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      updatedTodo
    }}>

      <div className="min-h-screen bg-black relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[140px] opacity-20"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[140px] opacity-20"></div>

        {/* Main Container */}
        <div className="relative z-10 py-10 px-4">

          <div className="w-full max-w-3xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[40px] p-8">

            {/* Heading */}
            <div className="text-center mb-10">

              <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text tracking-wide">
                Todo List 
              </h1>

              <p className="text-gray-400 mt-3 text-lg">
                Created By Vishesh Khandal ✨
              </p>

            </div>

            {/* Form */}
            <div className="mb-8">
              <TodoForm />
            </div>

            {/* Todo List */}
            <div className="space-y-5">

              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="w-full animate-fadeIn"
                >
                  <TodoItem todo={todo} />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </TodoProvider>
  )
}

export default App