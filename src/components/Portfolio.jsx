import React from 'react'
import first from '../p1.jpg'
import second from '../p2.jpg'
import third from '../p3.webp'
import forth from '../p4.webp'
import fifth from '../p5.jpg.webp'
import sixth from '../p6.jpg'

function Portfolio() {
    return (
        <div>
            <section className=" mt-md-5 py-5 gallery_tabs" id="portfolio">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 text-center third">
                            <h1>Our Latest Featured Projects</h1>
                            <p>Who are in extremely love with eco friendly system.</p>
                            <ul
                                className="nav nav-tabs justify-content-center"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="home-tab-pane"
                                        aria-selected="true"
                                    >
                                        ALL
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile-tab-pane"
                                        aria-selected="false"
                                    >
                                        VECTOR
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact-tab-pane"
                                        aria-selected="false"
                                    >
                                        RASTER
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#new"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact-tab-pane"
                                        aria-selected="false"
                                    >
                                        UI/UX
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#new2"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact-tab-pane"
                                        aria-selected="false"
                                    >
                                        PRINTING
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex={0}
                                >
                                    <div className="row py-md-4">
                                        <div className="col-12 col-md-4 ">
                                            <img
                                                className="img-fluid"
                                                src={first}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={second}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={third}
                                                alt=""
                                            />
                                            <h6 className="setting_1">Creative Poster Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                    <div className="row py-md-1">
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={forth}
                                                alt=""
                                            />
                                            <h6 className="setting_1">Embosed Logo Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img className="img-fluid" src={fifth} alt="" />
                                            <h6 className="setting_1">3D Helmet Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={sixth}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="row py-md-4">
                                        <div className="col-12 col-md-4 ">
                                            <img
                                                className="img-fluid"
                                                src={first}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img className="img-fluid" src={second} alt="" />
                                            <h6 className="setting_1">3D Helmet Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    tabIndex={0}
                                >
                                    <div className="row py-md-4">
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={third}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={forth}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="new"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    tabIndex={0}
                                >
                                    <div className="row py-md-4">
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={fifth}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="new2"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    tabIndex={0}
                                >
                                    <div className="row py-md-4">
                                        <div className="col-12 col-md-4">
                                            <img
                                                className="img-fluid"
                                                src={sixth}
                                                alt=""
                                            />
                                            <h6 className="setting_1">2D Vinyl Design</h6>
                                            <span>vector</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Portfolio