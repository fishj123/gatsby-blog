/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "./src/styles/style.css"
import ThemeContextProvider from "./src/contexts/themeContext"
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
