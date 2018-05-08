import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class PostFooter extends React.Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div className="post-footer has-text-centered">
        <hr />
        <p>Posted by EventThai</p>
      </div>
    )
  }
}

export default PostFooter
