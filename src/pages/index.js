import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="homepage-container">
      <div className="homepage-img-container">
        <h1 className="homepage-title">Personal blog.</h1>
        <Link to="#" className="read-latest-btn">Read Latest</Link>
      </div>
      <div className="homepage-top-square"><p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
      <div className="homepage-bottom-square">
        <h3>Sign Up</h3>
        <p>Join the mailing list to get the latest blogs.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage
