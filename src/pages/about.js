import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

import { FaTwitter, FaEnvelope  } from 'react-icons/fa'


export default () => (
    <Layout>
    <div className="about-container">
        <div className="article-central-column">
            <div className="title-box">
                <h3>About.</h3>
            </div>
            <div className="article-text">
                <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <div className="social-links">
                        <Link className="icon-links" to="#"><FaTwitter /></Link>
                        <Link className="icon-links" to="#"><FaEnvelope /></Link>
                        
                    
              </div>
            </div>
            </div>
    </div>
    </Layout>
)