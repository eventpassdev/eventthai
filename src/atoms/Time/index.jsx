import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Time extends React.Component {
  render() {
    const date = get(this.props, 'date')
    return (
      <time dateTime={date}>
        {date}
      </time>
    )
  }
}

export default Time
