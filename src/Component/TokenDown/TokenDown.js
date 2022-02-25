import React from 'react'
import "./TokenDown.css"
// import CBP_2 from "../../Assets/CBP_2 (1) 1.png"
// import CBP_3 from "../../Assets/CBP_3 (1) 1.png"
// import CBP_4 from "../../Assets/CBP_4 1.png"
// import CBP_5 from "../../Assets/CBP_5 1.png"
// import Vector8 from "../../Assets/Group.png"
function TokenDown() {
    return (
        <div className='container-fluid TokenDownimage'>
            <div className='container'>
                <div className='row d-flex justify-content-center justify-content-evenly pt-5 pb-5'>
                    <div className='col-md-3 tokendownbox mb-2'>
                        <img src="https://i.ibb.co/QPcZf1T/CBP-2-1-1.png" className='TokenImage pt-2' />
                        <h3 className='minttext fs-4 pt-2'>MINT</h3>
                        <p className='text-white fs-5'>Stake token Now and get point!</p>
                        <p className='text-white fs-5'>Mint & Collect NFTs</p>
                    </div>
                    <div className='col-md-3 tokendownbox mb-2'>
                        <img src="https://i.ibb.co/CJLQTzZ/CBP-3-1-1.png" className='TokenImage pt-2' />
                        <h3 className='minttext fs-4 pt-2'>MINE</h3>
                        <p className='text-white fs-5'>Play-and-Earn our reward token!</p>

                    </div>
                    <div className='col-md-3 tokendownbox mb-2'>
                        <img src="https://i.ibb.co/WknB45n/CBP-4-1.png" className='TokenImage pt-2' />
                        <h3 className='minttext fs-4 pt-2'>BREED</h3>
                        <p className='text-white fs-5'>Only the strongest survive! Breed and grow your own forces!</p>

                    </div>
                    <div className='col-md-3 tokendownbox mb-2'>
                        <img src="https://i.ibb.co/VjcJymt/CBP-5-1.png" className='TokenImage pt-2' />
                        <h3 className='minttext fs-4 pt-2'>BATTLE</h3>
                        <p className='text-white fs-5'>Start your conquest! Plat to earn. Get $THP token.</p>

                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default TokenDown