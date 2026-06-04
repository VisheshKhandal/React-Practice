import { useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  }
  const lightTheme = () => {
    setThemeMode('light');
  }
  // Actual Change Theme : 
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                      
                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App

/**
 BIG PICTURE FIRST : 
Your application flow is:

User clicks toggle (ThemeBtn.jsx component handles this and updates theme state in context API)
        ↓
ThemeBtn changes theme state (darkTheme or lightTheme function updates themeMode in context)
        ↓
Context API shares updated theme (themeMode) with the entire app via ThemeProvider
        ↓ 
App updates HTML class (document.querySelector('html').classList.add(themeMode) in useEffect) to either "dark" or "light"
        ↓
Tailwind detects "dark" class (dark: classes in Card.jsx) and applies the appropriate styles
        ↓
dark: classes activate ()
        ↓
UI changes (Card.jsx styles switch based on dark: classes, changing background, text color, etc.)

THIS is the whole system. Each part is crucial, but they work together to create the theme switching experience. */

