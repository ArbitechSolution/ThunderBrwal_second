import React from 'react'
import "./Menu.css"
// import vectorone from "../../Assets/vectorone.png"
// import android from "../../Assets/android.png"
// import Frame from "../../Assets/Frame 18.png"
// import video from "../../video/Free Online Video Compressor_2.mp4"
function Menu() {
  return (
    <div className='navbariamge'>
      <div className='container headertop'>
        <div className='row '>
          <div className='col-sm-5'>
            <p className='Fully'>Welcome To A Fully Decentralized</p>
            <p className='Fully'><span style={{ color: "#F3961E" }}>THUNDER BRAWL</span> Game!</p>
            <div className='box text-white text-center fs-4 fs-6'>Stake $THB token and get Brawl point!</div>
            <p className='text-white text-start fs-5 mt-2'>Mint NFTs , and Play and earn reward tokens by playing game</p>
            <p className='text-white text-start fs-5'>Supporting real crypto payouts for battle mode. The competition is fierce!</p>
            <div className='mb-5 d-flex flex-row'>
              <button className='btn btnmenu '>BUY NOW</button>
              <button className='btn btnmenu1 ms-2'>WHITEPAPER</button>
            </div>
          </div>
          <div className='col-sm-7'>
            <div className='row '>
              <div className='col-md-6 box1'>
                <img src="https://i.ibb.co/HK031mK/vectorone.png" className="imagemenu" />
                <iframe height="400" width="500"
                  src="https://www.youtube.com/embed/rlLZVe97Qus" className='mt-4 videos' controls="controls" autoplay="true">
                </iframe>
                {/* <video src="https://www.youtube.com/watch?v=rlLZVe97Qus" className='mt-4 videos' controls="controls" autoplay="true" /> */}

              </div>
            </div>
            <p className='text-white mt-md-5 mt-1 text-start fs-4 lh-1'>Enabled Thunder Brawl game available for Android</p>
            <div className='mb-5 d-flex flex-row justify-content-center'>
              <img src="https://i.ibb.co/9YfYYzS/android.png" className="androidimage " />
              <img src="https://i.ibb.co/GRdr4YC/Frame-18.png" className="Frameimage ms-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu