// import React from 'react'

// function WorkshopSpecficCard({Workshop}) {
//   return (
//     <div>
//         <h1 className='ps-5 mt-4'><i className='primaryColor'>/ </i>{Workshop.title}</h1>
//     <div className="container-md WorkshopSpecificWrap">
//         <div className="row align-items-center">
//             <div className="col-lg-5 p-5">
//                 <div className='WorkshopImageControl p-4 border border-4 border-dark'>
//                 <img src={Workshop.image} alt="" />
//                 <h6 className='pt-2' ><i className='primaryColor'>//</i> Conducted by experts from <i className='primaryColor'>{Workshop.dept}</i>Staffs</h6>

//                 </div>
                

//             </div>
//             <div className="col-lg-7 pt-3">
//                 <h3><i className='primaryColor'>#</i>What_to_expect?</h3>
//                 <div className='line line1 mb-4 '></div>
//                 <div className='workShopButton d-flex justify-content-around gap-3 mb-4'>
//                     <button className='btn btn-outline-primary border-3 active' data-bs-toggle="button" autocomplete="off" aria-pressed="true">Description  &lt;~&gt;</button>
//                     <button className='btn btn-outline-primary border-3 '>More Info  &lt;~&gt;</button>
//                 </div>
//                 <div className='p-2'>
//                 <h4 className='pt-1'>{Workshop.para1}</h4>
//                 <h4 className='pt-2'>{Workshop.para2}</h4>
//                 <h4 className='pt-2'>{Workshop.para3}</h4>
//                 <h4 className='pt-2'>{Workshop.para4}</h4>
//                 <button className='btn btn-outline-success border-3  my-3'>Registration Open &lt;~&gt;</button>

//                 </div>
                

//             </div>
//         </div>


//     </div>
//     </div>
//   )
// }

// export default WorkshopSpecficCard

import React, { useState } from 'react';

function WorkshopSpecficCard({ Workshop}) {
  const [activeTab, setActiveTab] = useState("description"); // State for managing the active section

  return (
    <div>
      <h1 className="ps-5 mt-4">
        <i className="primaryColor">/ </i>{Workshop.title}
      </h1>
      <div className="container-md WorkshopSpecificWrap">
        <div className="row align-items-center">
          {/* Workshop Image */}
          <div className="col-lg-5 p-5">
            <div className="WorkshopImageControl p-4 borderColor">
              <img src={Workshop.image} alt="" />
              <h6 className="pt-2">
                <i className="primaryColor">//</i> Conducted by experts from <i className="primaryColor">{Workshop.dept}</i> Staffs
              </h6>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-7 pt-3">
            <h3>
              <i className="primaryColor">#</i>What_to_expect?
            </h3>
            <div className="line line1 mb-4"></div>

            {/* Toggle Buttons */}
            <div className="workShopButton d-flex justify-content-around gap-3 mb-4">
              <button 
                className={`btn btn-outline-primary border-3 ${activeTab === "description" ? "active" : ""}`} 
                onClick={() => setActiveTab("description")}
              >
                Description &lt;~&gt;
              </button>
              <button 
                className={`btn btn-outline-primary border-3 ${activeTab === "moreinfo" ? "active" : ""}`} 
                onClick={() => setActiveTab("moreinfo")}
              >
                More Info &lt;~&gt;
              </button>
            </div>

            {/* Content Based on Active Tab */}
            <div className="p-2">
              {activeTab === "description" ? (
                <>
                  <h4 className="pt-1">{Workshop.para1}</h4>
                  <h4 className="pt-2">{Workshop.para2}</h4>
                  <h4 className="pt-2">{Workshop.para3}</h4>
                  <h4 className="pt-2">{Workshop.para4}</h4>
                  <button className="btn btn-outline-warning border-3 my-3">
                    Registration Open &lt;~&gt;
                  </button>
                </>
              ) : (
                <>
                <div className='d-flex flex-column gap-3 '>

                <div className="bg-dark text-white p-2 borderAnimate">
                    <div className="d-flex align-items-center gap-2">

                        <div className="p-2">
                        <i class="bi bi-clipboard-fill fs-2"></i>
                        </div>

                        <div>
                            <div className="fs-5">Physical Certificate</div>
                            <div className=" greyColor">Takeaways</div>
                        </div>

                    </div>
                </div>
                <div className="bg-dark text-white p-2 borderAnimate">
                    <div className="d-flex align-items-center gap-2">

                        <div className="p-2">
                        <i class="bi bi-clock-fill fs-2"></i>
                        </div>

                        <div>
                            <div className="fs-5">9:00 AM to 4:30 PM</div>
                            <div className=" greyColor">Time</div>
                        </div>

                    </div>
                </div>
                <div className="bg-dark text-white p-2 borderAnimate">
                    <div className="d-flex align-items-center gap-2">

                        <div className="p-2">
                        <i class="bi bi-calendar-check-fill fs-2"></i>
                        </div>

                        <div>
                            <div className="fs-5">{Workshop.date}, 2025</div>
                            <div className="greyColor">Date</div>
                        </div>

                    </div>
                </div>
                <div className="bg-dark text-white p-2 borderAnimate">
                    <div className="d-flex align-items-center gap-2">

                        <div className="p-2">
                        <i class="bi bi-geo-fill fs-2"></i>
                        </div>

                        <div>
                            <div className="fs-5">{Workshop.venue}</div>
                            <div className="greyColor">Venue</div>
                        </div>

                    </div>
                </div>
                {/* <div className="bg-dark text-white p-2 borderAnimate">
                    <div className="d-flex align-items-center gap-2">

                        <div className="p-2">
                        <i class="bi bi-person-vcard fs-2"></i>
                        </div>

                        <div>
                            <div className="fs-5">{Workshop.faculty}</div>
                            <div className="greyColor">Speaker</div>
                        </div>

                    </div>
                </div> */}



                </div>
                

  
                  
                  <button className="btn btn-outline-warning border-3 my-4" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScw5hddu82bCWz8QV-Jtm0GrBmw1_NhurNzU-jMsVJ4uM7_RA/viewform", "_blank")}>
                    Registration Open &lt;~&gt;
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopSpecficCard;
