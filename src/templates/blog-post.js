import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { FaTwitter } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-gtag"
import { C } from "../pages/index"
import styled from "styled-components"

const Footer = styled.div`
  background: white;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const BlogC = styled(C)`
  & h1 {
    margin-bottom: 5px;
  }

  & small {
    margin-bottom: 60px;
  }

  & .link {
    color: blue;
    text-decoration: underline;
    margin-bottom: 5px;
    display: block;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const description = post.frontmatter.description
  const date = post.frontmatter.date

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jckfshr" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/fishj123/blogs/journal_ZmLh-g0iW.jpg"
        />
      </Helmet>

      <BlogC>
        <h1>{title}</h1>
        <small>{date}</small>
        <div
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Footer>
          <OutboundLink
            href="https://twitter.com/jckfshr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Follow me on Twitter
          </OutboundLink>
        </Footer>
      </BlogC>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM, DD, YYYY")
        description
      }
    }
  }
`
