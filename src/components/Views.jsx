// import React from 'react'

// function Views() {
//     return (
//         <div>
//             <section id="views" className="increasing_numbers">
//                 <div className="container">
//                     <div className="stat ">
//                         <div className="row inner_count">
//                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0 ">
//                                 <div className="milestone-counter">
//                                     <i className="fa fa-user fa-3x pb-2" />
//                                     <div className="inerr_count_num">
//                                         <span className="stat-count highlight">100</span>
//                                         <span className="plus">+</span>
//                                     </div>
//                                     <div className="milestone-details">Happy Client</div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
//                                 <div className="milestone-counter">
//                                     <i className="fa fa-coffee fa-3x pb-2" />
//                                     <div className="inerr_count_num">
//                                         <span className="stat-count highlight">30</span>
//                                         <span className="plus">+</span>
//                                     </div>
//                                     <div className="milestone-details">Room Client</div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
//                                 <div className="milestone-counter">
//                                     <i className="fa fa-trophy fa-3x pb-2" />
//                                     <div className="inerr_count_num">
//                                         <span className="stat-count highlight">150</span>
//                                         <span className="plus">+</span>
//                                     </div>
//                                     <div className="milestone-details">Projects Completed</div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
//                                 <div className="milestone-counter">
//                                     <i className="fa fa-camera fa-3x pb-2" />
//                                     <div className="inerr_count_num">
//                                         <span className="stat-count highlight">64</span>
//                                         <span className="plus">+</span>
//                                     </div>
//                                     <div className="milestone-details">Waiting client</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
            
            
//         </div>
//     )
// }

// export default Views


import React, { useState, useEffect } from "react";

function CountUp() {
  useEffect(() => {
    const elements = document.querySelectorAll(".stat-count");
    elements.forEach((element) => {
      const count = parseInt(element.innerHTML);
      element.dataset.count = count;
      element.innerHTML = "0";
      countUp(element, count);
    });
  }, []);

  function countUp(element, count) {
    let current = 0;
    const increment = Math.ceil(count / 100);
    const duration = 2000;

    const timer = setInterval(() => {
      current += increment;
      element.innerHTML = current;
      if (current >= count) {
        clearInterval(timer);
        element.innerHTML = count;
      }
    }, duration / 100);
  }

  return <div>
    <section id="views" className="increasing_numbers">
                <div className="container">
                    <div className="stat ">
                        <div className="row inner_count">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0 ">
                                <div className="milestone-counter">
                                    <i className="fa fa-user fa-3x pb-2" />
                                    <div className="inerr_count_num">
                                        <span className="stat-count highlight">100</span>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="milestone-details">Happy Client</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
                                <div className="milestone-counter">
                                    <i className="fa fa-coffee fa-3x pb-2" />
                                    <div className="inerr_count_num">
                                        <span className="stat-count highlight">30</span>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="milestone-details">Room Client</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
                                <div className="milestone-counter">
                                    <i className="fa fa-trophy fa-3x pb-2" />
                                    <div className="inerr_count_num">
                                        <span className="stat-count highlight">150</span>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="milestone-details">Projects Completed</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center py-4 pb-md-0">
                                <div className="milestone-counter">
                                    <i className="fa fa-camera fa-3x pb-2" />
                                    <div className="inerr_count_num">
                                        <span className="stat-count highlight">64</span>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="milestone-details">Waiting client</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  </div>;
}

export default CountUp;

