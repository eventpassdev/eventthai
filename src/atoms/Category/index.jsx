import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Category extends React.Component {
  render() {
    const category = get(this.props, 'category')
    return (
      <span className="tag is-danger">
        {category}
      </span>
    )
  }
}

export default Category
