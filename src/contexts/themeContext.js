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
        ...initialState,
        selected: "green",
        backgroundColor: "darkseagreen",
        articleBackground: "#97d0ab",
        loadingTheme: false,
      }
    case "pink":
      return {
        ...initialState,
        selected: "pink",
        backgroundColor: "pink",
        articleBackground: "lightpink",
        loadingTheme: false,
      }
    case "blue":
      return {
        ...initialState,
        selected: "blue",
        backgroundColor: "#31a0efcf",
        articleBackground: "#3da2ea",
        loadingTheme: false,
      }
    case "light":
      return {
        ...initialState,
        selected: "light",
        backgroundColor: "#fff",
        articleBackground: "#fbfbfb",
        loadingTheme: false,
      }
    case "dark":
      return {
        ...initialState,
        selected: "dark",
        fontColor: "#e6e6e6",
        latestArticleBackground: "#d86540",
        backgroundColor: "#333",
        articleBackground: "#545454",
        loadingTheme: false,
      }
    case "no-theme":
      return {
        ...initialState,
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
  selected: "light",
  fontColor: "black",
  articleBackground: "#fbfbfb",
  latestArticleBackground: "antiquewhite",
  loadingTheme: true,
  backgroundColor: "#fff",
}

function ThemeContextProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialState)
  const { loadingTheme } = theme

  const themeConstants = {
    GREEN: "green",
    PINK: "pink",
    BLUE: "blue",
    LIGHT: "light",
    DARK: "dark",
  }

  function getThemeFromLocalStorage() {
    const item = localStorage.getItem("theme")
    if (item) {
      dispatch({ type: item })
    } else {
      dispatch({ type: "no-theme" })
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
