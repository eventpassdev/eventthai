import React from 'react'
import Helmet from 'react-helmet'
import './NotFound.scss';

export default class HTML extends React.Component {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="main main--notfound has-text-centered">
                            <h3 className="title is-3 has-text-white">ขออภัย ไม่พบหน้าที่กำลังค้นหา</h3>
                            <a className="button is-black is-rounded" href="/">กลับไปหน้าแรก</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}