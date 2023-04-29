import React from 'react'

function Careers() {
  return (
    <>
  <section style={{ backgroundColor: "#F8F9FA" }}>
    <div className="career_bg d-flex justify-content-center align-items-center">
      <div>
        <h1 className="text-white">Browse Jobs</h1>
        <p className="text-center">
          <a href="/">Home</a> &gt; Career
        </p>
      </div>
    </div>
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="career_heading text-center mt-5">
            <h1>Current Openings</h1>
            <p>Recently Added</p>
          </div>
        </div>
        <div className=" col-12 col-md-10 ">
          <div className="career_1 bg-white p-4 ">
            <div className="row">
              <div className="col-md-10 col-12">
                <div className="d-flex text-md-start text-center">
                  <div className="career1_heading">
                    Android Application Developer
                  </div>
                  <div className="career_batch bg-primary text-white mt-2 ms-3">
                    Fulltime
                  </div>
                </div>
                <div className="d-flex text-md-start text-center">
                  <div className="company_name">
                    <i className="ms-2 fa fa-envelope-o" aria-hidden="true" />{" "}
                    <a href="/">Horizam</a>
                  </div>
                  <div className="company_location ms-2">
                    <i className="ms-2 fa fa-map-marker" aria-hidden="true" />{" "}
                    Johar Town Lahore
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 text-center">
                <a href="/" className="btn btn-primary">
                  Job Details
                </a>
                <br />
                <span style={{ fontSize: 12 }}>2 months ago</span>
              </div>
            </div>
          </div>
          <div className="career_1 bg-white p-4 mt-4">
            <div className="row">
              <div className="col-md-10 col-12">
                <div className="d-flex text-md-start text-center">
                  <div className="career1_heading">
                    iOS Application Developer
                  </div>
                  <div className="career_batch bg-primary text-white mt-2 ms-3">
                    Fulltime
                  </div>
                </div>
                <div className="d-flex text-md-start text-center">
                  <div className="company_name">
                    <i className="ms-2 fa fa-envelope-o" aria-hidden="true" />{" "}
                    <a href="/">Horizam</a>
                  </div>
                  <div className="company_location ms-2">
                    <i className="ms-2 fa fa-map-marker" aria-hidden="true" />{" "}
                    Johar Town Lahore
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 text-center">
                <a href="/" className="btn btn-primary">
                  Job Details
                </a>
                <br />
                <span style={{ fontSize: 12 }}>2 months ago</span>
              </div>
            </div>
          </div>
          <div className="career_1 bg-white p-4 mt-4">
            <div className="row">
              <div className="col-md-10 col-12">
                <div className="d-flex text-md-start text-center">
                  <div className="career1_heading">HR Officer</div>
                  <div className="career_batch bg-primary text-white mt-2 ms-3">
                    Fulltime
                  </div>
                </div>
                <div className="d-flex text-md-start text-center">
                  <div className="company_name">
                    <i className="ms-2 fa fa-envelope-o" aria-hidden="true" />{" "}
                    <a href="/">Horizam</a>
                  </div>
                  <div className="company_location ms-2">
                    <i className="ms-2 fa fa-map-marker" aria-hidden="true" />{" "}
                    Johar Town Lahore
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 text-center">
                <a href="/" className="btn btn-primary">
                  Job Details
                </a>
                <br />
                <span style={{ fontSize: 12 }}>2 months ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section style={{ backgroundColor: "#40A7F4" }}>
    <div className="footer_career text-white text-center fw-bold py-3">
      © Copyright Instences Soft. All Rights Reserved
    </div>
  </section>
</>

  )
}

export default Careers