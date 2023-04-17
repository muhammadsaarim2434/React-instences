import React from 'react'
import about from '../slider-dec.png'

function About() {
    return (
        <div>
            <section className="" id="about">
                <div className="container">
                    <div className="row justify-content-between py-5">
                        <div className="col-12 col-md-6 my-5" data-aos="flip-left">
                            <img
                                src={about}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-12 col-md-4 mt-md-5 pt-5 " data-aos="fade-down">
                            <div className="herocontent1">
                                <span>ABOUT ME</span>
                                <h1>PERSONAL DETAILS </h1>
                                <p>
                                    Here, I focus on a range of items and features that we use in life
                                    without giving them a second thought. such as Coca Cola. Dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco.
                                </p>
                                <a href="#">
                                    <button>Discover Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About