import React from 'react'


const Nav = () => (
  <div className="nav">
      <div className="nav-links">
    <ul className="nav-links-list">
        <li>
            <img src="/home.png" className="home"/>
        </li>
        <li>
            <a>About</a>
        </li>
        <li>
            <a>Contact Us</a>
        </li>
        <li>
            <a>Blogs</a>
        </li>
        <li>
            <a>Email Finder</a>
        </li>
    </ul>

      <div className="nav-btn">
              <a className="btn">
                  Apply as Coder
              </a>
              <a className="btn">
                  Hire a Coder
              </a>
      </div>
      </div>
  </div>
)

export default Nav
