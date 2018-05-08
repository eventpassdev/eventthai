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
            backgroundImage: 'url(' + pathPrefix + '/img/detector.jpg' + ')',
          }}
        >
          <h1 className="display-1">Detector</h1>
        </section>

        <section className="" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <p className="text-muted text-left">
                  Detector is a camera app with live filter.<br />
                  Let's go on a creative travel of detection, to have your new
                  eyes.<br />
                  Filter has prepared three types. Or react to color and
                  movement, graphics will change by tapping the screen.<br />
                  We created the students and the Detector that to have a
                  two-way installation of the photographer and the subject on
                  the concept.
                </p>
              </div>
              <div className="col-lg-3">
                <a
                  href="https://geo.itunes.apple.com/us/app/detector-live-filter-camera/id1079950455?mt=8"
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
                <img src={pathPrefix + '/img/detector1.png'} />
              </div>
              <div
                className="col-md-6 wow slideInRight"
                data-wow-duration="1.0s"
              >
                <img src={pathPrefix + '/img/detector2.png'} />
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
                    className="fa fa-4x fa-camera text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Live Fillter Camera</h5>
                  <small className="text-muted">リアルタイムエフェクトのカメラアプリです。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-eye text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Detect Engine</h5>
                  <small className="text-muted">画像解析にはOpenCVを使用しています。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-bolt text-danger wow bounceIn"
                    data-wow-delay="1.0s"
                  />
                  <h5>Good Typesetting</h5>
                  <small className="text-muted">色や動きに反応しグラフィックが変化します。</small>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i
                    className="fa fa-4x fa-users text-danger wow bounceIn "
                    data-wow-delay="1.0s"
                  />
                  <h5>Team Developed</h5>
                  <small className="text-muted">学生の人たちとの共同制作です。</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dark" id="member">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Member </h2>
                <hr className="light" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-1 text-center" />
              <div className="col-md-2 text-center">
                <img
                  src={pathPrefix + '/img/profile/iwa.jpg'}
                  className="rounded-circle"
                />
                <p className="section-heading">Futoshi Iwashita</p>
              </div>
              <div className="col-md-2 text-center">
                <img
                  src={pathPrefix + '/img/profile/shima.jpg'}
                  className="rounded-circle"
                />
                <p className="section-heading">Eriko Shimada</p>
              </div>
              <div className="col-md-2 text-center">
                <img
                  src={pathPrefix + '/img/profile/iri.jpg'}
                  className="rounded-circle"
                />
                <p className="section-heading">Shun Irie</p>
              </div>
              <div className="col-md-2 text-center">
                <img
                  src={pathPrefix + '/img/profile/aki.jpg'}
                  className="rounded-circle"
                />
                <p className="section-heading">Akito Suzuki</p>
              </div>
              <div className="col-md-2 text-center">
                <img
                  src={pathPrefix + '/img/profile/taru.jpg'}
                  className="rounded-circle"
                />
                <p className="section-heading">Ayaka Tarui</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Yomu
