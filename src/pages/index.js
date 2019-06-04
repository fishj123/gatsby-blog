import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <div className="homepage-container">
      <div className="homepage-img-container">
        <h1 className="homepage-title">Personal blog.</h1>
        <Link to="/blog-article" className="read-latest-btn">
          Read Latest
        </Link>
      </div>
      <SideBar />
    </div>
  </Layout>
)

export default IndexPage
