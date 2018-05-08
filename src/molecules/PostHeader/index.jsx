import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'
import Category from '../../atoms/Category'
import Time from '../../atoms/Time'

class PostHeader extends React.Component {
  categories(data) {
    if (!data) {
      return
    }
    const categories = []
    data.forEach((category, i) => {
      categories.push(<Category category={category} key={i} />)
    })
    return categories
  }

  render() {
    const data = this.props.data
    const title = get(this.props, 'title')
    const path = get(this.props, 'path')
    const date = get(this.props, 'date')
    const cate = get(this.props, 'category') || get(this.props, 'categories')
    const categories = cate ? this.categories(cate) : ''

    return (
      <div className="page-header">
        <Link to={path}>
          <h1 className="title">
            {title}
          </h1>
          <Time date={date} />
        </Link>
        {categories}
      </div>
    )
  }
}

export default PostHeader
