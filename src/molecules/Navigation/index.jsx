import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1>
                {title}
              </h1>
            </Link>
            <div
              className="navbar-burger burger"
              data-target="navMenuDocumentation"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuDocumentation" className="navbar-menu">
            <div className="navbar-start">
              <Link
                to="/"
                className={
                  location.pathname === '/'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Home
              </Link>
              <Link
                to="/profile"
                className={
                  location.pathname === '/profile'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Profile
              </Link>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jaxx2104/"
                target="_blank"
              >
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jaxx2104/"
                target="_blank"
              >
                <span className="icon">
                  <i className="fa fa-twitter" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      /*
      <nav className="navbar sticky-top navbar-inverse bg-danger">
        <div className="container">
          <Link to="/">
            <h1 className="navbar-brand mb-0">
              {title}
            </h1>
          </Link>
          <ul className="navbar-nav">
            <li
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                location.pathname === '/profile/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/profile/" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      */
    )
  }
}

export default SiteNavi
