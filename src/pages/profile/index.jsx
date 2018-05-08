import React from 'react'
import Icon from '../../atoms/Icon'
import Circle from '../../atoms/Circle'
import Section from '../../molecules/Section'
class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="section hero has-text-centered">
          <div className="container">
            <Circle width="120" />
            <h1 className="title">jaxx2104</h1>
            <p className="subtitle">コーラとバグが好き</p>
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/jaxx2104"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @jaxx2104
              </a>
            </div>
          </div>
        </section>
        <Section
          title="SKILL"
          color="is-danger"
          child={
            <div className="columns is-mobile is-multiline">
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="html5-plain" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="javascript-plain" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="react-original" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="vuejs-plain" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="nodejs-plain-wordmark" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="php-plain" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="swift-plain-wordmark" />
              </div>
              <div className="column is-3-tablet is-6-mobile">
                <Icon name="amazonwebservices-plain-wordmark" />
              </div>
            </div>
          }
        />
        <Section
          title="Features"
          child={
            <p>
              学生時代のバイトでWEBエンジニアになりました。<br />
              主にフロントエンドを、時々バックエンドもやってます。<br />
              趣味はNode.jsを使ったIoTとアプリの開発です。
            </p>
          }
        />
        <Section
          title="WORKS"
          color="is-danger"
          child={
            <div className="columns is-mobile is-multiline">
              <div
                className="column is-6-tablet is-12-mobile wow slideInLeft"
                data-wow-duration="1.0s"
              >
                <a href="/yomu/">
                  <img src={pathPrefix + '/img/work1.png'} />
                </a>
                <p>Yomu</p>
              </div>
              <div
                className="column is-6-tablet is-12-mobile wow slideInRight"
                data-wow-duration="1.0s"
              >
                <a href="/detector/">
                  <img src={pathPrefix + '/img/work2.png'} />
                </a>
                <p>Detector</p>
              </div>
            </div>
          }
        />
        <Section
          type="left"
          title="Repositories"
          color="is-danger"
          child={
            <div className="column is-12 has-text-left">
              <li>
                <a href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                  gatstrap
                </a>
              </li>
              <li>
                <a href="https://github.com/jaxx2104/gulp-sample">
                  gulp-sample
                </a>
              </li>
              <li>
                <a href="https://github.com/jaxx2104/irm">irm</a>
              </li>
              <li>
                <a href="https://github.com/jaxx2104/mt-dataapi-php">
                  mt-dataapi-php
                </a>
              </li>
            </div>
          }
        />
        <Section
          title="Degree Works"
          subtitle={
            <p>
              過去の制作は<a href="https://old.jaxx2104.info/">こちら</a>
            </p>
          }
          child={<img src={pathPrefix + '/img/work3.png'} />}
          isLeft={true}
        />
      </div>
    )
  }
}

export default Profile
