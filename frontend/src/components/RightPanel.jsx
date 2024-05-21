import React from 'react'
import User from '../assets/images/user.jpg';

const RightPanel = () => {
  return (
    <>
        <div>
                <h2>Who to Follow</h2>
                <div className="d-flex gap-3 ms-5 mt-4">
                  <div>
                    <img className="rounded-circle text-start" width="50px" src={User} alt="" />
                  </div>
                  <div>
                    <p className="fw-bold mb-2 text-start">Muhammad Hasnain</p>
                    <button className="btn btn-outline-primary text-start d-block">Follow</button>
                  </div>
                </div>
                <div className="d-flex gap-3 ms-5 mt-4">
                  <div>
                    <img className="rounded-circle text-start" width="50px" src={User} alt="" />
                  </div>
                  <div>
                    <p className="fw-bold mb-2 text-start">John</p>
                    <button className="btn btn-outline-primary text-start d-block">Follow</button>
                  </div>
                </div>
                <div className="d-flex gap-3 ms-5 mt-4">
                  <div>
                    <img className="rounded-circle text-start" width="50px" src={User} alt="" />
                  </div>
                  <div>
                    <p className="fw-bold mb-2 text-start">Anas Khan</p>
                    <button className="btn btn-outline-primary text-start d-block">Follow</button>
                  </div>
                </div>
                <div className="d-flex gap-3 ms-5 mt-4">
                  <div>
                    <img className="rounded-circle text-start" width="50px" src={User} alt="" />
                  </div>
                  <div>
                    <p className="fw-bold mb-2 text-start">Daniyal</p>
                    <button className="btn btn-outline-primary text-start d-block">Follow</button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default RightPanel