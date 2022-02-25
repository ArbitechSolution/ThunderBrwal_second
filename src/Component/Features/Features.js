import React from 'react'
import "./Features.css"
// import CWC_1 from "../../Assets/CWC_1 1.png"
// import CWC_2 from "../../Assets/CWC_2 (1) 1.png"
// import CWC_3 from "../../Assets/CWC_31 1.png"

function Features() {
    return (
        <div className='Features-image' id="features">
            <div className='container'>
                <div className='row pb-5'>
                    <div className='col-md-12'>
                        <h2 className='text-white mt-4'>FEATURES</h2>
                        <div className='row d-flex justify-content-center justify-content-evenly'>
                        <div className='col-md-3 col-10 featuresbox pb-3 mt-md-1 mt-2'>
                            <p className='text-white fs-5 fw-bold pt-2'>PLAY</p>
                            <p className='fs-5 lh-1' style={{ color: "#F8B815" }}>ANYTIME</p>
                            <img src="https://i.ibb.co/09wrZrj/CWC-1-1.png" width="140px" />
                            <div>
                            <button className='btn features-btn text-white fs-6 fw-bold p-2 mt-3'>ABOUT GAMEPLAY</button>
                            </div>
                        </div>
                        <div className='col-md-3 col-10 featuresbox pb-3 mt-md-1 mt-3'>
                            <p className='text-white fs-5 fw-bold pt-2'>TRADE</p>
                            <p className='fs-5 lh-1' style={{ color: "#F8B815" }}>ANYTIME</p>
                            <img src="https://i.ibb.co/4VcGMZG/CWC-2-1-1.png" width="140px" />
                            <div>
                            <button className='btn features-btn text-white fs-6 fw-bold p-2 mt-3'>ABOUT NFT CARDS</button>
                            </div>
                        </div>
                        <div className='col-md-3 col-10 featuresbox pb-3 mt-md-1 mt-3'>
                            <p className='text-white fs-5 fw-bold pt-2'>EARN</p>
                            <p className='fs-5 lh-1' style={{ color: "#F8B815" }}>ANYTIME</p>
                            <img src="https://i.ibb.co/8N0KRYQ/CWC-31-1.png" width="140px" />
                            <div>
                            <button className='btn features-btn text-white fs-6 fw-bold p-2 mt-3'>ABOUT REWARDS</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features