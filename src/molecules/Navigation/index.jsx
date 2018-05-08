import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav id="navbar" className="navbar is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h4 className="title is-4 has-text-white">EventThai</h4>
            </Link>
            <div
              className="navbar-burger burger"
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
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
                to="#services"
                className={
                  location.pathname === '/services'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Services
              </Link>
              <Link
                to="#work"
                className={
                  location.pathname === '/work'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Work
              </Link>
              <Link
                to="#about"
                className={
                  location.pathname === '/about'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                About
              </Link>
              <Link
                to="#partners"
                className={
                  location.pathname === '/partners'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Partners
              </Link>
              <Link
                to="#contact"
                className={
                  location.pathname === '/contact'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
