import React, { useState } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"

import logo from "../../images/logo.svg"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about/",
      text: "about",
    },
  ])

  const navbarHandler = () => {
    if (navbarOpen) {
      setCss("collapse navbar-collapse")
      setNavbarOpen(false)
    } else {
      setCss("collapse navbar-collapse show")
      setNavbarOpen(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>

      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-4">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
