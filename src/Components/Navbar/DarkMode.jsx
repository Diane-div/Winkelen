import React, { useState, useLayoutEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const DarkMode = () => {
  // On first render, pick stored theme or system preference
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Apply theme to <html> immediately
  useLayoutEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])
  
  const toggle = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="
        p-2 rounded-full shadow hover:shadow-lg transition
        fixed top-4 right-4 bg-white dark:bg-gray-800
      "
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-white-400" />
      ) : (
        <Moon size={24} className="text-white-800" />
      )}
    </button>
  )
}

export default DarkMode
