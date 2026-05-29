import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className = 'bg-blue-800 text-red-700 p-4 rounded-xl mb-8'>Tailwind CSS</h1>
    <Card username = "Chai" btntext = "Hello Jee"  />
    <Card username = "Coffee" btntext = "Kaise Ho Mitro"  />

    </>
  )
}

export default App
