/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import "../styles/style.css"
import styled, { ThemeProvider } from "styled-components"
import { ThemeContext } from "../contexts/themeContext"

const C = styled.main`
  padding-top: 3rem;
  min-height: 100vh;
  background: ${props => props.theme.backgroundColor};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {themeCtx => (
          <ThemeProvider theme={themeCtx.theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Blog | Jack Fisher</title>
              <meta name="author" content="Jack Fisher" />
              <meta
                name="description"
                content="Bitesize articles relating to JavaScript, React, and Typescript amongst other things."
              />
              <meta
                name="keywords"
                content="javascript, gatsby, node, typescript, learn, react, tutorial, blog, developer, programming"
              />
            </Helmet>
            {themeCtx.loadingTheme ? null : <C>{children}</C>}
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
