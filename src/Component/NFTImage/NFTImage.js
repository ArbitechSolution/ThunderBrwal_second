import React from 'react'
import "./NFTImage.css"
// import Group149 from "../../Assets/Group 149.png"
import gif11 from "../../video/Screenshot (1)-min (1).gif"
import gif21 from "../../video/Screenshot (2).gif"

function NFTImage() {
    return (
        <div className='NFTimage'>
            <div className='container'>
                <div className='row d-flex justify-content-center justify-content-evenly pt-5 pb-5'>
                <div className='col-md-6 d-flex justify-content-center align-items-center mt-md-1'>
                    <img src="https://i.ibb.co/pZhZkMw/Group-149.png" className="backimage"/>
                    <img src={gif11} className="frontimage"/>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center mt-md-1 mt-3' >
                    <img src="https://i.ibb.co/pZhZkMw/Group-149.png" className="backimage"/>
                    <img src={gif21} className="frontimage"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NFTImage