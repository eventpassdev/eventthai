import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PostHeader from '../../molecules/PostHeader'
import PostContent from '../../molecules/PostContent'
import './style.scss'

class Post extends React.Component {
  render() {
    const { site, data, isIndex } = this.props
    const title = get(data, 'frontmatter.title')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const cate = get(data, 'frontmatter.categories')
    const desc = get(data, 'frontmatter.description') || get(data, 'html')

    return (
      <div className="post container" key={path}>
        <PostHeader
          isIndex={isIndex}
          title={title}
          path={path}
          date={date}
          categories={cate}
        />
        <PostContent
          isIndex={isIndex}
          description={desc}
          path={path}
          site={site}
        />
      </div>
    )
  }
}

export default Post
