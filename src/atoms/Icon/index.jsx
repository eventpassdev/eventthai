import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Icon extends React.Component {
  render() {
    const name = get(this.props, 'name')
    return (
      <i className={`devicon-${name} wow bounceIn`} data-wow-duration="2.0s" />
    )
  }
}

export default Icon
