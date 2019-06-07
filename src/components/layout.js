/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "./header"
import '../styles/style.css';

// import "./layout.css"

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Jack Fisher</title>
          <meta name="author" content="Jack Fisher" />
          <meta name="description" content="JavaScript blog for developers and programmers who want to learn new things. I post regular tutorials that help you improve your skills" />
          <meta name="keywords" content="JavaScript, Gatsby, Node, npm, learn, beginner, tutorial, blog, developer, programming" />
        </Helmet>
          <main>{children}</main>

        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
