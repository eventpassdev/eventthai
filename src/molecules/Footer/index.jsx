import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Footer extends React.Component {
  render() {

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>&copy; COPYRIGHT 2018 EvetThai co.,Ltd.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
