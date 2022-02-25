import React from 'react'
import "./PlayToEarn.css"
// import Frame from "../../Assets/Frame 19.png"
// import gameimage from "../../Assets/game image4 1.png"
// import Vector1 from "../../Assets/Vector-1.png"
// import Vector2 from "../../Assets/Vector-2.png"
// import gameImage from "../../Assets/game image.png"

function PlayToEarn() {
    return (
        <div className='PlayToEarnImage'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <img src="https://i.ibb.co/yWhJyn9/Frame-19.png" width="100%" className="Playpic" />
                        <img src="https://i.ibb.co/sgqJZZy/game-image4-1.png" width="100%" className="palytoearnpic" />
                    </div>
                    <div className='col-md-6 text-start text-white'>
                        <h4 className='PLAYh2 pt-md-4 pt-2'>PLAY TO EARN</h4>
                        <p className='palytoearnP pt-md-2 pt-2'>Have you ever wanted to be a Big profit from Game?</p>
                        <h5 className='palytoearnh5 pt-md-3 pt-2'>Now you can!</h5>
                        <p className='palytoearnP pt-md-2 pt-2'>Thunder Brawl games makes it easy to earn on a daily basis. Players can win rewards from game, Ranked play, and Quests!</p>
                        <p className='palytoearnP pt-md-2 pt-2'>No matter what your skill level or collection size, there is always an opportunity to earn!</p>
                    </div>
                    <div className='row mt-3 display'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/ZdHf9JX/Vector-1.png" className="playtoearnpicture" />
                        </div>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/CJNC67m/Vector-2.png" className="playtoearnpicture" />
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center text-center mt-5 pb-5' >
                        <div className='col-md-6 text-start text-white ms-1'>
                            <h4 className='PLAYh2'>GOT CRYPTO?</h4>
                            <p className='palytoearnP'>It is a blockchain-based mobile action game developed based on the Sindorim, the original Korean webtoon. Directly control the original characters and enjoy the unique skills and actions of each character.</p>
                            <p className='palytoearnP'>It is possible to form a unique party with various characters, and the connection effect is activated when a team is formed with characters with a certain affinity to the original story.</p>
                            <p className='palytoearnP'>Even if you pick the same character, you can grow in a different way through the function of DNA. You can strengthen your character in various ways through various equipment and characteristics, runes, and options such as transcendence or awakening.</p>
                        </div>
                        <div className='col-md-5' >
                            <img src="https://i.ibb.co/PD2yCBP/game-image.png" className="pictures"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PlayToEarn