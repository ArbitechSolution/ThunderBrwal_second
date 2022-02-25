import React from 'react'
import "./MaskGroup.css"
// import Kakao from "../../Assets/Kakao-Talk.png"
// import vectors from "../../Assets/Vector-11.png"
function MaskGroup() {
    return (
        <div className='MaskGroupImage' id="maskgroup">
            <div className='container'>
                <div className='row pt-5 d-flex justify-content-evenly'>
                    <div className='col-md-7'>
                        <h4 className='text-white fs-md-2 text-start pt-md-3 pt-2'>POWERED BY BLOCKCHAIN TECHNOLOGY</h4>
                        <p className='text-white fs-5 text-start pt-md-3 pt-2'>Blockchain technology is powering the future of gaming, allowing players to trade, sell, and play to earn.</p>
                        <p className='text-white fs-5 text-start pt-md-3 pt-2'>Breaking away from the existing simple collection-type game, when a character or equipment summons is performed, the record is recorded on the blockchain.</p>
                        <p className='text-white fs-5 text-start pt-md-3 pt-2'>Characters above a certain level through NFT technology support interpersonal transactions in the marketplace.</p>
                    </div>
                    <div className='col-sm-4 mt-lg-1 mt-5'>
                        <img src="https://i.ibb.co/1KMQqXn/Kakao-Talk.png" className="maskgroupimage"/>
                    </div>
                    <div className='col-md-11 col-11 maskgroupbox mt-md-5 mt-2 mb-5'>
                        <div className='row justify-content-around justify-content-center'>
                            <div className='col-sm-2  pt-3 pb-2'>
                                <img src="https://i.ibb.co/TckdWC1/Vector-11.png"/>
                                <p className='text-white fs-6 pt-2'>COMBINE CARDS TO GAIN LEVELS</p>
                            </div>
                            <div className='col-md-2 pt-3 pb-2'>
                                <img src="https://i.ibb.co/TckdWC1/Vector-11.png"/>
                                <p className='text-white pt-2'>CONVERT CARDS TO CRYPTO</p>
                            </div>
                            <div className='col-md-2 pt-3 pb-2'>
                                <img src="https://i.ibb.co/TckdWC1/Vector-11.png"/>
                                <p className='text-white pt-2'>TRADE WITH ANYONE</p>
                            </div>
                            <div className='col-md-2 pt-3 pb-2'>
                                <img src="https://i.ibb.co/TckdWC1/Vector-11.png"/>
                                <p className='text-white pt-2'>CREATE YOUR TEAM TO BATTLE</p>
                            </div>
                            <div className='col-md-2 pt-3 pb-2'>
                                <img src="https://i.ibb.co/TckdWC1/Vector-11.png"/>
                                <p className='text-white pt-2'>SELL ON MARKETPLACE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaskGroup