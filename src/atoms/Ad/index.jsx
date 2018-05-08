import React from 'react'
import './style.css'

export default class Ad extends React.Component {
  componentDidMount() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3858517603539412"
          data-ad-slot="5047240856"
          data-ad-format="auto"
        />
      </div>
    )
  }
}
