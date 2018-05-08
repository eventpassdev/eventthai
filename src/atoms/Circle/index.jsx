import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Circle extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const width = get(this.props, 'width')

    return (
      <img
        className="img-circle"
        src={pathPrefix + '/img/profile.jpg'}
        width={`${width}px`}
      />
    )
  }
}

export default Circle
