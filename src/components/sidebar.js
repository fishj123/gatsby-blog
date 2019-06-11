import React from "react"

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

        <h4 style={{ textAlign: "center" }}>Join my mailing list</h4>
        <form
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
          <p>
          <input name="name" id="name" type="email" placeholder="Your email" />
          </p>
          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SideBar
