import React from "react"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-gtag"
import { FaGithub } from "react-icons/fa"
import styled from "styled-components"
import Img from "gatsby-image"

const C = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 10px;

  .img-c {
    width: 70%;
    height: 70%;
    max-width: 300px;
    max-height: 300px;
    margin: auto;
    margin-bottom: 30px;
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  p {
    line-height: 1.5;
  }
`

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <C>
        <h1>About</h1>
        <div className="img-c">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Orange sliced in half painted blue"
            className="homepage-image"
          />
        </div>
        <p>
          Hi, I'm Jack, a developer from Edinburgh, Scotland. The blogs I post
          here are mainly short tutorials aimed at developers who are looking
          for easy-to-digest information on various topics. The tutorials I
          write are largely dictated by what I am learning at the time as I
          think this is a useful way to solidify knowledge. Check back regularly
          for updates!
        </p>
        <div className="social-links">
          {/* <OutboundLink
          className="icon-links"
          href="https://twitter.com/jckfshr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </OutboundLink> */}

          <OutboundLink
            className="icon-links"
            href="https://github.com/fishj123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </OutboundLink>
        </div>
      </C>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    file(relativePath: { eq: "images/me.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
