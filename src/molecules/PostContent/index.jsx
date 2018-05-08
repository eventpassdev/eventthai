import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'
import Ad from '../../atoms/Ad'
import PostFooter from '../../molecules/PostFooter'

class PostContent extends React.Component {
  description(body) {
    if (body.match('<!--more-->')) {
      body = body.split('<!--more-->')
      if (typeof body[0] !== 'undefined') {
        return body[0]
      }
    }
    return body
  }

  more(body, path) {
    if (body.match('<!--more-->')) {
      return (
        <Link className="readmore" to={path}>
          <span className="button is-danger is-outlined">MORE</span>
        </Link>
      )
    }
    return
  }

  render() {
    const isIndex = get(this.props, 'isIndex')
    const path = get(this.props, 'path')
    const description = get(this.props, 'description')
    const site = get(this.props, 'site')

    return (
      <div className="page-content">
        {isIndex ? '' : <Ad />}
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: isIndex ? this.description(description) : description,
          }}
        />
        {isIndex ? this.more(description, path) : ''}
        {isIndex ? '' : <Ad />}
        {isIndex ? '' : <PostFooter data={site} />}
      </div>
    )
  }
}

export default PostContent
