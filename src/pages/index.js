import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Post from '../templates/Post'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/') {
        pageLinks.push(
          <LazyLoad height={500} offset={100} key={i}>
            <Post data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    return (
      // <div className="wrapper">
      //   <Helmet title={get(site, 'title')} />
      //   {pageLinks} 
      // </div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered"></div>
            <Helmet title={get(site, 'title')} />
            <div className="has-text-centered"><h2 className="title is-2 has-text-white">พบกับอีเว้นท์ไทยรูปแบบใหม่ เร็วๆนี้</h2></div>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            categories
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
