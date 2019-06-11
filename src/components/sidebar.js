import React from "react"
// using OutboundLink for external links allows google to track the clicks
import { OutboundLink } from "gatsby-plugin-gtag"

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="homepage-top-square">
        <p className="intro-text">
          Welcome to my website. There's not much to it, just a simple blog
          built with Gatsby. Have a look around and read some of my articles, if
          you like them then follow me on Twitter to keep up to date with the
          latest posts.
        </p>
      </div>
      <div className="homepage-bottom-square">
        {/* <div
          style={{
            textAlign: "left",
            border: "2px solid white",
            padding: "1rem",
          }}
        >
          <h3>Social Links</h3>
          <p style={{ marginBottom: "1rem" }}>
            <OutboundLink
              href="https://twitter.com/jckfshr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on Twitter
            </OutboundLink>
          </p>
          <p>
            <OutboundLink href="mailto:jackfisher5882@gmail.com">Send me an email</OutboundLink>
          </p>
        </div> */}
        <h4 style={{ textAlign: "center" }}>Join my mailing list</h4>
        <form
          action="/"
          name="mailing-list"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input
            style={{ display: "none" }}
            name="bot-field"
            autoComplete="off"
          />
          <input name="name" id="name" type="text" placeholder="Your name" />
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your email"
          />
          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SideBar
