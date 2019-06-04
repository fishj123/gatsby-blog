import React from "react"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"

import { Link } from "gatsby"
import SEO from "../components/seo"


const BlogsPage = () => {
  return (
    <Layout>
    <SEO title="Blogs" />
      <div className="blogs-page-container">
        <div className="blogs-list">
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
          <div className="blog-item-box">
            <Link className="blog-link" to="#">
              This is the title.
            </Link>
          </div>
        </div>
        <SideBar />
      </div>
    </Layout>
  )
}

export default BlogsPage
