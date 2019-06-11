import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (

  <Layout>
    <SEO title="404: Not found" />
    <div className="page-not-found-container">
    <h1>Uh Oh...</h1>
    <p>You just hit a route that doesn&#39;t exist... sad times</p>
    <Link to="/">Take me home</Link>
    </div>
  </Layout>

)

export default NotFoundPage
