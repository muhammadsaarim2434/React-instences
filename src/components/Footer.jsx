import React from 'react'

function Footer() {
  return (
    <div>
        <section className="footer" id="contact">
            <div className="container">
                <div className="row justify-content-evenly">
                <div className="col-md-4 col-12 footer_sec footer_secs">
                    <h4>About Me</h4>
                    <p>
                    We have tested a number of registry fix and clean utilities and
                    present our top 3 list on our site for your convenience.
                    </p>
                </div>
                <div className="col-md-2 col-12 footer_sec footer_secs">
                    <h4>Follow Me</h4>
                    <p>Let us be social</p>
                    <div className="d-flex justify-content-between">
                    <div className="footer_icons">
                        <a href="#">
                        <div className="icon_holder">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </div>
                        </a>
                    </div>
                    <div className="footer_icons">
                        <a href="#">
                        <div className="icon_holder">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </div>
                        </a>
                    </div>
                    <div className="footer_icons">
                        <a href="#">
                        <div className="icon_holder">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </div>
                        </a>
                    </div>
                    <div className="footer_icons">
                        <a href="#">
                        <div className="icon_holder">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 footer_sec1 footer_secs1">
                    <h4>Contact Us</h4>
                    <p>Stay updated with our latest trends</p>
                    <form action="https://formspree.io/f/mqkjnjnn" method="post">
                    <input type="text" placeholder="Your Name" className="name_setting" />
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="name_setting"
                    />
                    <textarea
                        className="name_setting"
                        name="message"
                        id="msg"
                        placeholder="Message"
                        defaultValue={""}
                    />
                    <div className="mt-3">
                        <a href="#" className="nav_button">
                        <button>SUBMIT</button>
                        </a>
                    </div>
                    </form>
                    <p />
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer