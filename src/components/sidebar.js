import React from "react"

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="homepage-top-square">
        <p className="intro-text">
          Welcome to my website. There's not much to it, just a simple blog built with Gatsby. Have a look around and read some of my articles, if you like them then follow me on Twitter to keep up to date with the latest posts.
        </p>
      </div>
      <div className="homepage-bottom-square">
        <h3>Social Links</h3>
        <div style={{textAlign: "left"}}>
        <p style={{marginBottom: "1rem"}}><a href="https://twitter.com/jckfshr" target="_blank" rel="noopener noreferrer">Find me on Twitter</a></p>
        <p><a href="mailto:jackfisher5882@gmail.com">Send me an email</a></p>
        </div>
        {/* <h3>Sign Up</h3>
        <p className="form-text">Join the mailing list to get the latest blogs.</p> */}
        {/* <form action="https://gmail.us20.list-manage.com/subscribe/post?u=5143fe4e43d65fa5865d05076&amp;id=d82a3b0cac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button style={{cursor: "pointer"}} id="join-mailing" type="submit">Join</button>
        </form> */}
        <div>
          
        </div>
                      
      </div>
    </React.Fragment>
  )
}

export default SideBar
