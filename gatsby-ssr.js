/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// You can delete this file if you're not using it
import React from "react"
import "./src/styles/style.css"
import ThemeContextProvider from "./src/contexts/themeContext"
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
