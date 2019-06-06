import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage-container">
      <div className="homepage-img-container">
        <div>
          <Img fluid={data.file.childImageSharp.fluid} alt="Orange sliced in half painted blue" />
        </div>
        <div className="homepage-banner-text">
          <h1 className="homepage-title">Personal blog.</h1>
          <Link
            to={data.allMarkdownRemark.edges[0].node.fields.slug}
            className="read-latest-btn"
            role="button"
          >
            Read Latest
          </Link>
        </div>
      </div>
      <SideBar />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
    file(relativePath: { eq: "images/blue-orange2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
