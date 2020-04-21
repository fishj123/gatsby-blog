import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react"

export const ThemeContext = createContext()
export const useThemeContext = () => useContext(ThemeContext)
function themeReducer(state, action) {
  switch (action.type) {
    case "green":
      return {
        selected: "green",
        backgroundColor: "darkseagreen",
        latestArticleBackground: "antiquewhite",
        articleBackground: "#97d0ab",
        loadingTheme: false,
      }
    case "pink":
      return {
        selected: "pink",
        backgroundColor: "pink",
        latestArticleBackground: "antiquewhite",
        articleBackground: "lightpink",
        loadingTheme: false,
      }
    default:
      return {
        ...initialState,
        loadingTheme: false,
      }
  }
}

const initialState = {
  selected: "green",
  backgroundColor: "darkseagreen",
  latestArticleBackground: "antiquewhite",
  articleBackground: "#97d0ab",
  loadingTheme: true,
}

function ThemeContextProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialState)
  const { loadingTheme } = theme

  const themeConstants = {
    GREEN: "green",
    PINK: "pink",
  }

  function getThemeFromLocalStorage() {
    const item = localStorage.getItem("theme")
    if (item) {
      dispatch({ type: item })
    }
  }

  function saveThemeToLocalStorage() {
    localStorage.setItem("theme", theme.selected)
  }

  useEffect(() => {
    getThemeFromLocalStorage()
  }, [])

  useEffect(() => {
    saveThemeToLocalStorage()
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, themeConstants, dispatch, loadingTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
