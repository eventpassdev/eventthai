import React from 'react'

class Yomu extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section
          className="jumboimage"
          style={{
            backgroundImage: 'url(' + pathPrefix + '/img/yomu.jpg' + ')',
          }}
        >
          <h1 className="display-1">Yomu</h1>
        </section>

        <section className="" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <p className="text-muted text-left">
                  Yomu is the RSS reader born to the concept "which looks
                  through all the reports single hand" in Japan.
                  <br />In the list screen which carried out the form of the
                  palette, a site can be crossed and a report can be read.
                  <br />Please register a favorite site and blog and create only
                  your leader.
                </p>
              </div>
              <div className="col-lg-3">
                <a
                  href="https://geo.itunes.apple.com/us/app/yomu-rss-reader/id924321598?mt=8"
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    background:
                      'url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg) no-repeat',
                    width: '165px',
                    height: '40px',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-danger text-center" id="concept">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Detail </h2>
                <hr className="light" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 wow slideInLeft"
                data-wow-duration="1.0s"
              >
                <img src={pathPrefix + '/img/yomu1.png'} />
              </div>
              <div
                className="col-md-6 wow slideInRight"
                data-wow-duration="1.0s"
              >
                <img src={pathPrefix + '/img/yomu2.png'} />
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Features </h2>
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-th-large text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Grid Layout</h5>
                  <small className="text-muted">格子状の画面で横断して記事を読むことが出来ます。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-hand-paper-o text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Simple UI </h5>
                  <small className="text-muted">大画面でも片手で操作出来るように設計しました。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-newspaper-o text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Good Typesetting </h5>
                  <small className="text-muted">余計なスタイルを読みやすい文字組みで表示します。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-heart text-danger wow bounceIn "
                    data-wow-delay="1.0s"
                  />
                  <h5>Made with Love </h5>
                  <small className="text-muted">アプリの要望に応えてアップデートします。</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Yomu
