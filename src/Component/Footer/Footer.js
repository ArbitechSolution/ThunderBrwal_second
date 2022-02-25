import React from 'react'
import "./Footer.css"
// import gmail from "../../Assets/gmail.png"
function Footer() {
  return (
    <div className='FooterImage'>
        <div className='container'> 
        <div className='row  pt-3 pb-3'>
            <div className='col-md-12 footertext'>
                <p className='text-white fs-5'><img src="https://i.ibb.co/1sttvfC/gmail.png" width="15px"/> info@thunderbrawl.game</p>
                <p className='text-white fs-5'>© 2022 ThunderBrawl. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer