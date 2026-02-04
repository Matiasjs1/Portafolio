import { useEffect, useState } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved) {
      setTheme(saved)
      return
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    const html = document.documentElement

    if (theme === "light") {
      html.setAttribute("data-theme", "light")
    } else {
      html.removeAttribute("data-theme")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return { theme, toggleTheme }
}