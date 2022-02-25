import React, { useRef, useState } from 'react'
import "./Homepage.css"
// import B from "../../Assets/--02 1.png"
// import P from "../../Assets/--08 1.png"
// import BP from "../../Assets/--11 1.png"
// import Ellipse from "../../Assets/Ellipse 9.png"
// import Rectangle from "../../Assets/Rectangle 14.png"
import { RiFileCopyLine } from 'react-icons/ri';
// import Rectangle484 from "../../Assets/Rectangle 484.png"
import { useClipboard } from 'use-clipboard-copy';
function Homepage() {

    const clipboard = useClipboard({
        copiedTimeout: 1000, // timeout duration in milliseconds
      });
    return (
        <div className='homeimage' id="token">
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12'>
                        <h2 className='text-white mt-5'>TOKEN</h2>
                    </div>
                    <div className='row d-flex justify-content-evenly justify-content-center mt-md-5'>
                        <div className='col-md-3 homebox mb-2 pt-3 pb-3'>
                            <p className='text-white fs-4 mt-2'>Native Token</p>
                            <img src="https://i.ibb.co/pfXvJYN/02-1.png" width="100px" />
                            <div className='mt-4'>
                                <p className='BRAWL'>THUNDER BRAWL</p>
                                <p className='THB'>(THB)</p>
                            </div>
                        </div>
                        <div className='col-md-3 homebox mb-2 pt-3 pb-3'>
                            <p className='text-white fs-4 mt-2'>In-game Currency</p>
                            <img src="https://i.ibb.co/k61kQg2/08-1.png" width="100px" />
                            <div className='mt-4'>
                                <p className='BRAWL'>THUNDER POWER</p>
                                <p className='THB'>(THP)</p>
                            </div>
                        </div>
                        <div className='col-md-3 homebox mb-2 pt-3 pb-3'>
                            <p className='text-white fs-4 mt-2'>Point</p>
                            <img src="https://i.ibb.co/YBpR4rb/11-1.png" width="100px" />
                            <div className='mt-4'>
                                <p className='BRAWL'>BRAWL POINT</p>
                                <p className='THB'>(BRL)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center pb-5 mt-5' id="about">
                    <div className='col-sm-11 col-11 homeboxs mb-3'>
                        <div className='col-md-12'>
                            <h2 className='text-white mt-4'>TOKEN ECONOMICS</h2>
                        </div>
                        <div className='row d-flex justify-content-center mb-3 mt-5'>
                            <div className='col-sm-5 mb-3'>
                                <div className='row d-flex justify-content-center justify-content-evenly mt-md-5'>
                                    <div className='col-lg-5 col-10 homeboxes  mt-3'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Play and Earn</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start fs-6'>30%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(30,000,000,000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-md-3 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Private Round</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>6%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(6,000,000,000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Ecosystem Fund</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>20%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(20,000,000.000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Community Event</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>6%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(6,000,000,000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Team</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>17%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(17,000,000.000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Liquidity</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>5%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(5,000,000,000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Staking Reward</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>13%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(13,000,000.000 token)</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 homeboxes  mt-lg-5 mt-2'>
                                        <p className='text-white text-start ps-1 pt-3 span-text'>Advisor</p>
                                        <div className='pb-2 text-start ps-1'>
                                            <span className='text-white text-start'>3%</span>&nbsp;
                                            <span className='text-light' style={{ fontSize: "11px" }}>(3,000,000,000 token)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 d-flex justify-content-center align-items-center ' >
                                <img src="https://i.ibb.co/6yRdWz8/Ellipse-9.png" className="homepicture " />
                                <div className='texthomes lh-1'>
                                    <p className='fs-sm-4 fw-bold' style={{ color: "#F3961E" }}>Thunderbrawl</p>
                                    <p className='text-white fssm-4 fw-bold'>100 BILLION</p>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <img className='imagepostion' src="https://i.ibb.co/yp6kV2X/Rectangle-484.png" />
                                        <div className='imagepostionsss'>
                                            <p className='lh-1'>Staking Rewards</p>
                                            <p className='text-white text-start lh-1' >15%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3 mt-5 marginid'>
                                <div className='line-height'>
                                    <p className='Token-Name text-md-start text-center line-height'>Token Name</p>
                                    <p className='Thunderbrawl text-md-start text-center line-height'>Thunderbrawl Coin</p>
                                    <img src="https://i.ibb.co/XW2cy70/Rectangle-14.png" className="homepagepic" />
                                </div>
                                <div className='line-height'>
                                    <p className='Token-Name text-md-start text-center line-height'>Token Symbol</p>
                                    <p className='Thunderbrawl text-md-start text-center line-height'>THB</p>
                                    <img src="https://i.ibb.co/XW2cy70/Rectangle-14.png" className="homepagepic" />
                                </div>
                                <div className='line-height'>
                                    <p className='Token-Name text-md-start text-center line-height'>Token Supply</p>
                                    <p className='Thunderbrawl text-md-start text-center line-height'>100,000,000,000 THB</p>
                                    <img src="https://i.ibb.co/XW2cy70/Rectangle-14.png" className="homepagepic" />
                                </div>
                                <div className='line-height '>
                                    <p className='Token-Name text-md-start text-center line-height'>Blockchain Network</p>
                                    <p className='Thunderbrawl text-md-start text-center line-height'>Binance Smart Chain</p>
                                    <img src="https://i.ibb.co/XW2cy70/Rectangle-14.png" className="homepagepic" />
                                </div>
                                <div className='line-height ' className="d-flex flex-column justify-content-center">
                                    <p className='Token-Name text-md-start text-center line-height'>Contract Address</p>
                                    <textarea className='d-flex justify-content-md-start justify-content-center'
                                            ref={clipboard.target}
                                            
                                            value='0xf7d9f74f02F258961F229f10666A1DbA85d0529F'
                                            
                                        />
                                        <div className='d-flex justify-content-md-start justify-content-center'>
                                            <button className='btn text-md-start text-center' onClick={clipboard.copy} style={{color: "#F8B815", fontSize: "14px"}}><RiFileCopyLine size={23} /> {clipboard.copied ? 'Copied' : 'Copy'}</button>
                                        </div>
                                    <img src="https://i.ibb.co/XW2cy70/Rectangle-14.png" className="homepagepic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage