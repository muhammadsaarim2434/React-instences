import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import fdb from '../feedback1.webp';

const OwlCarouselComponent = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  };

  return (
    <section className="feedback">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center third">
                            <h1>Client’s Feedback About Me</h1>
                            <p>
                                It is very easy to start smoking but it is an uphill task to quit it.
                                Ask any chain smoker or even a person.
                            </p>
                        </div>
                    </div>
                
                    <div className="row ">
                            <div className="blog_slider  p-5">
                                <OwlCarousel className="owl-theme" {...options}>
                                    <div className="single_slide px-3">
                                            <div className="row bg-white">
                                                <div className="col-md-2 col-12 p-4">
                                                    <img className="img-fluid" src={fdb} alt="" />
                                                </div>
                                                <div className="col-md-9 col-12 p-4">
                                                    <p>
                                                        A purpose is the eternal condition for success. Every former
                                                        smoker can tell you just how hard it is to stop smoking
                                                        cigarettes. However.
                                                    </p>
                                                    <h3>Harriet Maxwell</h3>
                                                    <span>CEO at GOOGLE</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="single_slide px-3">
                                            <div className="row bg-white">
                                                <div className="col-md-2 col-12 p-4">
                                                    <img className="img-fluid" src={fdb} alt="" />
                                                </div>
                                                <div className="col-md-9 col-12 p-4">
                                                    <p>
                                                        A purpose is the eternal condition for success. Every former
                                                        smoker can tell you just how hard it is to stop smoking
                                                        cigarettes. However.
                                                    </p>
                                                    <h3>Harriet Maxwell</h3>
                                                    <span>CEO at GOOGLE</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="single_slide px-3">
                                            <div className="row bg-white">
                                                <div className="col-md-2 col-12 p-4">
                                                    <img className="img-fluid" src={fdb} alt="" />
                                                </div>
                                                <div className="col-md-9 col-12 p-4">
                                                    <p>
                                                        A purpose is the eternal condition for success. Every former
                                                        smoker can tell you just how hard it is to stop smoking
                                                        cigarettes. However.
                                                    </p>
                                                    <h3>Harriet Maxwell</h3>
                                                    <span>CEO at GOOGLE</span>
                                                </div>
                                            </div>
                                    </div>
                                    
                                </OwlCarousel>
                                
                            </div>
                        </div>
                </div>
                
    </section>
    
  );
};

export default OwlCarouselComponent;



