import React from 'react'
import "./Roadmap.css"
// import Ellipse13 from "../../Assets/Ellipse 13.png"
// import Vector4 from "../../Assets/Vector4.png"
// import Rectangle547 from "../../Assets/Rectangle 547.png"
// import Vector5 from "../../Assets/Vector5.png"
// import Vector6 from "../../Assets/Vector6.png"
// import Ellipse14 from "../../Assets/Ellipse 14.png"

function Roadmap() {
    return (
        <div className='Roadmapimage' id="roadmap">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-white mt-4'>ROAD MAP</h2>
                    </div>
                    <div className='row '>
                        <div className='col-md-12 '>
                            <div class="newclascenter ">
                                <div className=' timeline '>

                                    <div className="timeline__component">
                                        <div className="timeline__date timeline__date--right fw-bold bolders">Q3, Q4 2021</div>
                                    </div>
                                    <div className="timeline__middle">
                                        <div className="timeline__point">
                                            <img src="https://i.ibb.co/hmnfpZq/Vector4.png" width="20px"/>
                                        </div>

                                    </div>
                                    <div className="timeline__component timeline__component--bg text-start">
                                        <ul className="unorderlist">
                                            <li className="unorderlist1">Verify ideals, start designing and building the games</li>
                                            <li className="unorderlist1">Prepare for official plan</li>
                                            <li className="unorderlist1">Complete coding the game</li>
                                            <li className="unorderlist1">Apply blockchain technologies into the game</li>
                                        </ul>
                                    </div>

                                    <div className="timeline__component">
                                        <div className="timeline__date timeline__date--right fw-bold bolders">Q1 2021</div>
                                    </div>

                                    <div class="timeline__middles">
                                        <div className="timeline__points">
                                            <img src="https://i.ibb.co/fvRTf3f/Vector6.png" width="18px"/>
                                        </div>
                                    </div>
                                    <div className="timeline__component timeline__component--bg text-start ">
                                        <ul className='orderlist'>
                                            <li className='oderlist1'>Private sale round</li>
                                            <li className='oderlist1'>Improve the game</li>
                                            <li className='oderlist1'>Improve UI/UX, animation …</li>
                                            <li className='oderlist1'>Listing $THB on PancakeSwap</li>
                                            <li className='oderlist1'>P2E Game Launch (Google Play)</li>
                                            <li className='oderlist1'>Allow players to create (mint) general NFT token</li>
                                            <li className='oderlist1'>Launch of the playable demo game</li>
                                        </ul>
                                    </div>
                                    <div className="timeline__component">
                                        <div className="timeline__date timeline__date--right fw-bold bolders">Q2 2021</div>
                                    </div>
                                    <div className="timeline__middles">
                                        <div className="timeline__points">
                                        <img src="https://i.ibb.co/fvRTf3f/Vector6.png" width="18px"/>
                                        </div>
                                    </div>
                                    <div className="timeline__component timeline__component--bg text-start">
                                        <ul className='orderlist'>
                                            <li className='oderlist1'>Listing $THP on PancakeSwap</li>
                                            <li className='oderlist1'>Officially launching the game and starting the staking pool</li>
                                            <li className='oderlist1'>Game Eco-System Expansion</li>
                                            <li className='oderlist1'>Community development</li>
                                        </ul>
                                        
                                    </div>
                                    <div className="timeline__component">
                                        <div className="timeline__date timeline__date--right fw-bold bolders">Q3, Q4 2022</div>
                                    </div>
                                    <div className="timeline__middless">
                                        <div className="timeline__points">
                                        <img src="https://i.ibb.co/fvRTf3f/Vector6.png" width="18px"/>
                                        </div>
                                    </div>
                                    <div className="timeline__component timeline__component--bottom timeline__component--bg text-start">
                                    <ul className='orderlist'>
                                            <li className='oderlist1'>Business expansion</li>
                                            <li className='oderlist1'>Operating and exploiting</li>
                                            <li className='oderlist1'>Listing $THB top centralized exchange</li>
                                            <li className='oderlist1'>2nd NFT minting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap