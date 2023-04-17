import React from 'react'
import logo from '../logo.png'
import hero from '../web-main.gif'


function Headers() {
    return (
        <div>

<section className="bg-white bg-decor">
  <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              className="img-fluid log_setting"
              alt=""
            />
          </a>
          {/* Navbar for Mobile*/}
          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            {" "}
            <span className="navbar-toggler-icon" />{" "}
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="/">
                {" "}
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid"
                  width={40}
                />{" "}
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fontsize ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#services"
                  >
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#portfolio"
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#pricing"
                  >
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#contact"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
              <a href="#" className="nav_button">
                <button>CAREER</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="row justify-content-between pt-md-5 mt-md-5 mb-md-5">
      <div className="col-12 col-md-5" data-aos="fade-down">
        <div className="herocontent">
          <span>THIS IS ME</span>
          <h1>PHILIP GILBERT </h1>
          <p>
            You will begin to realise why this exercise is called the Dickens
            Pattern with reference to the ghost showing Scrooge some different
            futures.
          </p>
          <a href="#">
            <button>Discover Now</button>
          </a>
        </div>
      </div>
      <div className="col-12 col-md-5 my-5" data-aos="fade-right">
        <img className="img-fluid" src={hero} alt="" />
      </div>
    </div>
  </div>
</section>


        </div>
    )
}

export default Headers;
