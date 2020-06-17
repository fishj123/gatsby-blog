import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { FaTwitter } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-gtag"
import { C } from "../pages/index"
import styled from "styled-components"
import moment from "moment"

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
  padding-bottom: 90px;
  & * {
    color: ${props => props.theme.fontColor};
  }

  & h1 {
    margin-bottom: 5px;
  }

  & h2 {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 2rem;
    font-weight: bold;
  }

  & p {
    line-height: 1.8;
  }

  & ol {
    padding-left: 30px;
    margin-top: 10px;
  }

  & li {
    margin-bottom: 10px;
  }

  & small {
    margin-bottom: 60px;
  }

  & .link {
    color: blue;
    text-decoration: underline;
    background: white;
  }

  & code {
    background: #fdf6e3;
    border-radius: 3px;
    padding: 3px;
    color: #657b83;
  }

  & .warning {
    background: #ff4f4f;
    border-radius: 5px;
    padding: 5px;
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jckfshr" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/fishj123/splash_3G4W4PPpUPx.jpg"
        />
      </Helmet>

      <BlogC>
        <h1>{title}</h1>
        <small>{moment(date).format("DD-MMM-YYYY")}</small>
        <div
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {/* <Footer>
          <OutboundLink
            href="https://twitter.com/jckfshr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Follow me on Twitter
          </OutboundLink>
        </Footer> */}
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
