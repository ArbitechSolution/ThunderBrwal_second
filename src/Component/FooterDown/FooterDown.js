import React from 'react'
import "./FooterDown.css"

import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane,FaYoutube } from 'react-icons/fa'
import { RiGithubLine } from 'react-icons/ri'
function FooterDown() {
  return (
    <div className='FooterDownImage'>
           <div className='container'>
               <div className='row pt-5 pb-5 d-flex justify-content-center'>
                   <div className='col-12'>
                   <img src="https://i.ibb.co/J5BD1S8/logo.png" width="100px" />
                   </div>
                   <div className='col-md-4 d-flex justify-content-evenly mt-5'>
                     <a href='https://t.me/thb_community' target="_blank"><FaTelegramPlane size={28} className="icon"/></a>
                     <a href='https://twitter.com/THB_crypto' target="_blank"><BsTwitter size={28} className="icon"/></a>
                     <a href='https://github.com/Thunderbrawl-coin' target="_blank"><RiGithubLine size={28} className="icon"/></a>
                   
                  
                   
                   </div>
               </div>
           </div>
    </div>
  )
}

export default FooterDown