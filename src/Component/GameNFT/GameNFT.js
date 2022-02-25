import React, { useEffect } from 'react'
import "./GameNFT.css"
// import vector3 from "../../Assets/Vector-3.png"
import { Tabs, Tab } from 'react-bootstrap'
// import $ from "jquery";
// import tiger1 from "../../Assets/tiger 1.jpg"
// import tiger2 from "../../Assets/tiger2.jpg"
// import tiger3 from "../../Assets/tiger3.jpg"
// import tiger4 from "../../Assets/tiger4.jpg"
// import tiger5 from "../../Assets/tiger5.jpg"
// import tiger6 from "../../Assets/tiger6.jpg"
import Slider from "react-slick";
// import chracter1 from "../../Assets/chracter 1.png"
// import chracter2 from "../../Assets/chracter 2.png"
// import chracter3 from "../../Assets/character 3.png"
// import chracter4 from "../../Assets/character 4.png"
// import chracter5 from "../../Assets/character 5.png"
// import chracter6 from "../../Assets/character 6.png"
// import equip1 from "../../Assets/equip1.png"
// import equip2 from "../../Assets/equip2.png"
// import equip3 from "../../Assets/equip3.png"
// import equip4 from "../../Assets/equip4.png"
// import equip5 from "../../Assets/equip5.png"
function GameNFT() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    return (
        <div className='GameNftImage' id="nft">
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h2 className='text-white mt-4'>GAME NFT</h2>
                    </div>
                    <div className='col-md-10 col-11 GameNFT-Box text-white text-start mb-4 p-4 mt-5'>
                        <ul className='game-order-list'>
                            <li className='gamelist'>The innovative concept of NFT Yield Farming allows NFT collections to be used in DeFi yield farming, which extraordinarily enhances NFT collections’ value!</li>
                            <li className='gamelist'>Characters or equipment of a certain level or higher can be NFTed with breed.</li>
                            <li className='gamelist'>Type NFT card and Special Tiger mask card can get with mint and breed.</li>
                            <li className='gamelist'>Stake your NFTs card and get reward with $THP tokens.</li>

                        </ul>

                    </div>
                </div>
                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-md-10 col-10'  >


                        <Tabs defaultActiveKey="Tiger" id="uncontrolled-tab-example" className="" >
                            <Tab eventKey="Tiger" title="Tiger" style={{ border: "1px solid gray" }}>
                                <div className='row d-flex justify-content-center'>
                                    <div className="col-md-12 ">
                                        <Slider {...settings}>
                                            <div>
                                                <img src="https://i.ibb.co/BPqHrwB/tiger-1.jpg" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/rFdJD6z/tiger2.jpg" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/N3LFQH2/tiger3.jpg" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/3pcMPWT/tiger4.jpg" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/sgnDY2H/tiger5.jpg" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/rphxwJr/tiger6.jpg" className="m-1 gamepic" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="Characters" title="Characters" style={{ border: "1px solid gray" }}>
                            <div className='row d-flex justify-content-center'>
                                    <div className="col-md-12 ">
                                        <Slider {...settings}>
                                            <div>
                                                <img src="https://i.ibb.co/ynVW6D0/chracter-1.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/GC42wgy/chracter-2.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/2gDh4hm/character-3.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/41qWVHg/character-4.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/cFPzjgF/character-5.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/LxVhHsh/character-6.png" className="m-1 gamepic" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Equipment" title="Equipment" style={{ border: "1px solid gray", color: "green" }}>
                            <div className='row d-flex justify-content-center'>
                                    <div className="col-md-12 ">
                                        <Slider {...settings}>
                                            <div>
                                                <img src="https://i.ibb.co/hLcZ9qX/equip1.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/nzVG3Pc/equip2.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/V3J107q/equip3.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/Y0hMZY5/equip4.png" className="m-1 gamepic" />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/BfSrGx5/equip5.png" className="m-1 gamepic" />
                                            </div>
                                            
                                        </Slider>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameNFT