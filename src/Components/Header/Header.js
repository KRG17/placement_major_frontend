import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <Link
          to="/"
          className="title-link"
        >
          <h1>TOPIC MASTER</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <Link
          to="/about"
          className="about-class"
        >
          About
        </Link>
        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  )
}

export default Header
