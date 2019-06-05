import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage-container">
      {console.log(data)}
      <div className="homepage-img-container">
        <h1 className="homepage-title">Personal blog.</h1>
        <Link
          to={data.allMarkdownRemark.edges[0].node.fields.slug}
          className="read-latest-btn"
        >
          Read Latest
        </Link>
      </div>
      <SideBar />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
