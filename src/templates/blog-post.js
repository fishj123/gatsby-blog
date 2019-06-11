import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { FaTwitter } from "react-icons/fa"
import { OutboundLink } from 'gatsby-plugin-gtag'


export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>
      <div className="blog-article-container">
        <div className="article-central-column">
          <div className="title-box">
            <h3>{post.frontmatter.title}</h3>
            <p className="date-posted">Date Posted: {post.frontmatter.date}</p>
          </div>
          <div className="article-text">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <OutboundLink
            className="twitter-follow-me"
            href="https://twitter.com/jckfshr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Follow me on Twitter 
          </OutboundLink>
        </div>
      </div>
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
        
      }
    }
  }
`
