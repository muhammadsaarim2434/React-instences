import React from 'react'

function Plans() {
  return (
    <div>
        <section className="plan pb-5" id="pricing">
            <div className="container">
                <div className="plan_heading text-center">
                <h1>Choose Your Plan</h1>
                <p>
                    When someone does something that they know that they shouldn’t do, did
                    they.
                </p>
                </div>
                <div className="row">
                <div className="col-12 col-md-3">
                    <div className="pricing_plan py-5">
                    <div className="center-div">
                        <div className="outside_circle">
                        <div className="inside_circle">
                            <h1>01</h1>
                        </div>
                        </div>
                    </div>
                    <div className="plan_content text-center pt-3">
                        <h5>Economy</h5>
                        <p>For the individuals</p>
                        <hr />
                        <p>Secure Online Transfer</p>
                        <hr />
                        <p>Unlimited Styles for interface</p>
                        <hr />
                        <p>Reliable Customer Service</p>
                        <hr />
                        <h2>£199.00</h2>
                    </div>
                    <div className="hide text-center">
                        <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#getstarted"
                        >
                        BUY NOW
                        </button>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 ">
                    <div className="pricing_plan py-5">
                    <div className="center-div">
                        <div className="outside_circle">
                        <div className="inside_circle">
                            <h1>02</h1>
                        </div>
                        </div>
                    </div>
                    <div className="plan_content text-center pt-3">
                        <h5>Business</h5>
                        <p>For the individuals</p>
                        <hr />
                        <p>Secure Online Transfer</p>
                        <hr />
                        <p>Unlimited Styles for interface</p>
                        <hr />
                        <p>Reliable Customer Service</p>
                        <hr />
                        <h2>£299.00</h2>
                        <div className="hide text-center">
                        <button className="btn btn-primary">BUY NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 ">
                    <div className="pricing_plan py-5">
                    <div className="center-div">
                        <div className="outside_circle">
                        <div className="inside_circle">
                            <h1>03</h1>
                        </div>
                        </div>
                    </div>
                    <div className="plan_content text-center pt-3">
                        <h5>Premium</h5>
                        <p>For the individuals</p>
                        <hr />
                        <p>Secure Online Transfer</p>
                        <hr />
                        <p>Unlimited Styles for interface</p>
                        <hr />
                        <p>Reliable Customer Service</p>
                        <hr />
                        <h2>£399.00</h2>
                        <div className="hide text-center">
                        <button className="btn btn-primary">BUY NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 ">
                    <div className="pricing_plan py-5">
                    <div className="center-div">
                        <div className="outside_circle">
                        <div className="inside_circle">
                            <h1>04</h1>
                        </div>
                        </div>
                    </div>
                    <div className="plan_content text-center pt-3">
                        <h5>Exclusive</h5>
                        <p>For the individuals</p>
                        <hr />
                        <p>Secure Online Transfer</p>
                        <hr />
                        <p>Unlimited Styles for interface</p>
                        <hr />
                        <p>Reliable Customer Service</p>
                        <hr />
                        <h2>£499.00</h2>
                        <div className="hide text-center">
                        <button className="btn btn-primary">BUY NOW</button>
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

export default Plans