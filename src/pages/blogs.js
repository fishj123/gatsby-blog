import React from "react"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="blogs-page-container">
        <div className="blogs-list">
          {data.allMarkdownRemark.edges.map(({node }) => 

          <div className="blog-item-box">
            <Link className="blog-link" to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </div>

            )}

        </div>
        <SideBar />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
