import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import LatestArticle from "../components/home/latestArticle"
import ArticleListItem from "../components/home/articleListItem"

const C = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin: auto;

  & h1 {
    margin-bottom: 65px;
  }

  & ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }
`

const IndexPage = ({ data }) => {
  const latestArticle = data.allMarkdownRemark.edges[0].node

  const articles = data.allMarkdownRemark.edges
  console.log(articles)

  return (
    <Layout>
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="Orange sliced in half painted blue" className="homepage-image"/> */}
      <C>
        <h1>Latest Articles</h1>
        <LatestArticle latestArticle={latestArticle} />

        <ul>
          {articles.map(article => (
            <ArticleListItem article={article} />
          ))}
        </ul>
      </C>
    </Layout>
  )
}
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
          excerpt
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
