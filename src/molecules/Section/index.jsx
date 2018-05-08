import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Section extends React.Component {
  render() {
    const title = get(this.props, 'title') || ''
    const subtitle = get(this.props, 'subtitle') || ''
    const color = get(this.props, 'color') || ''
    const child = get(this.props, 'child') || <p>test</p>
    const isLeft = get(this.props, 'isLeft') || false

    return (
      <section
        className={`section hero ${color} ${isLeft
          ? 'has-text-left'
          : 'has-text-centered'}`}
      >
        <div className="container">
          <div className="columns">
            <div className={`column ${isLeft ? 'is-6' : 'is-12'}`}>
              <h2>
                {title}
              </h2>
              <p>
                {subtitle}
              </p>
              {isLeft ? '' : <hr className={color} />}
            </div>
            {isLeft ? child : ''}
          </div>
          {isLeft ? '' : child}
        </div>
      </section>
    )
  }
}

export default Section
