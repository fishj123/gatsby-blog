import React, { createContext, useContext, useState, useReducer } from "react"

export const ThemeContext = createContext()
export const useThemeContext = () => useContext(ThemeContext)
function themeReducer(state, action) {
  switch (action.type) {
    case "green":
      return {
        backgroundColor: "darkseagreen",
        latestArticleBackground: "antiquewhite",
        articleBackground: "#97d0ab",
      }
    case "pink":
      return {
        backgroundColor: "pink",
        latestArticleBackground: "antiquewhite",
        articleBackground: "lightpink",
      }
    default:
      return initialState
  }
}

const initialState = {
  backgroundColor: "darkseagreen",
  latestArticleBackground: "antiquewhite",
  articleBackground: "#97d0ab",
}

function ThemeContextProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialState)

  const themeConstants = {
    GREEN: "green",
    PINK: "pink",
  }

  return (
    <ThemeContext.Provider value={{ theme, themeConstants, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
