import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="d-flex bg-blue">
      <nav className="mt-3 ">
        <ul>
          <li>
            <Link to="/" className="htl">
              Hotel
            </Link>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#" className="li ">
              Link
            </a>
          </li>
          <li>
            <Link to="/Signin">Signin</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
