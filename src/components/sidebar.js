import React from "react"

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="homepage-top-square">
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse 
        </p>
      </div>
      <div className="homepage-bottom-square">
        <h3>Sign Up</h3>
        <p className="form-text">Join the mailing list to get the latest blogs.</p>
        <form action="https://gmail.us20.list-manage.com/subscribe/post?u=5143fe4e43d65fa5865d05076&amp;id=d82a3b0cac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button style={{cursor: "pointer"}} id="join-mailing" type="submit">Join</button>
        </form>
        <div>
          
        </div>
                      
      </div>
    </React.Fragment>
  )
}

export default SideBar
