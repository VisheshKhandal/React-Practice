import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : "Click me to go Google"
}
const anotherReactElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to go Google
  </a>
)
const ReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to go Google'
)
function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
    // reactElement
    // anotherReactElement
    // ReactElement
    // <MyApp />
    <App/>
    
)
