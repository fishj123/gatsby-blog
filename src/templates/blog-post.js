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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jckfshr" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content="Jack Fisher is a front-end developer from Edinburgh. Follow his personal blog for tips and tricks as well as advice for beginners learning to code." />
        <meta name="twitter:image" content="https://ik.imagekit.io/fishj123/blogs/journal_ZmLh-g0iW.jpg" />
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
