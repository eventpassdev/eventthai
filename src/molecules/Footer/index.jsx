import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Footer extends React.Component {
  render() {
    const title = get(this.props, 'title')
    const author = get(this.props, 'author')

    return (
      <div className="footer">
        <div className="container">
          <p>
            {title}
            <Link to="/profile/">
              <br />
              <strong>{author}</strong> on Profile
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
