import React from "react"
import Layout from "../components/layout"

import { FaTwitter, FaGithub } from "react-icons/fa"

export default () => (
  <Layout>
    <div className="about-container">
      <div className="article-central-column">
        <div className="title-box">
          <h3>About.</h3>
        </div>
        <div className="article-text">
          <p>
            Hi, welcome to my blog. I'm Jack, a JavaScript developer from
            Edinburgh, Scotland. The blogs I post here are mainly short
            tutorials aimed at beginner-level developers who are looking for
            easy-to-digest information on various programming topics. The
            tutorials I write are largely dictated by what I am learning at the
            time as I think this is a useful way to solidify knowledge. The best
            way to learn something is to teach it to someone else! If you like
            my blogs then please follow me on Twitter where you can keep up to
            date with the latest articles I post. You can find links to my
            Twitter and Github below.
          </p>
          <div className="social-links">
            <a
              className="icon-links"
              href="https://twitter.com/jckfshr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="icon-links"
              href="https://github.com/fishj123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
