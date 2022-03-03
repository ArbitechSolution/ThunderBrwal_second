import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import CloseButton from 'react-bootstrap/CloseButton'
import "./congratulation.css"
import axios from 'axios';
import { nftContratAddress, nftContractAbi } from "../../Component/Utils/Nft"
function MyVerticallyCenteredModal(props) {
    let [image, setImage] = useState([])
    const get = async () => {
        // let newarr = [11,23,32,12,22,1,2];
        let simplearray = []
        for (let i = 0; i < props.number; i++) {
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(nftContractAbi, nftContratAddress);
            let Inputid = await nftContractOf.methods.mintids(i).call();
            // newarr.push(Inputid)
            let finalapiData = await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${Inputid}.json`)
            finalapiData = finalapiData.data;
            let imageUrl = finalapiData.image;
            console.log("api data,", finalapiData);
            console.log("imageUrl", imageUrl);
            console.log("newarr", Inputid);
            simplearray.push(imageUrl);
            setImage(simplearray);
            // newarr.push(Inputid)
        }

    }
    useEffect(() => {
        get()
    })
    return (


        <div>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d-flex StakePageImage'>
                <Modal.Header className='StakePageImage'>
                    <div className='container Stakeboxs pb-4 '>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-12 d-flex justify-content-end mt-2'>
                                <CloseButton onClick={props.onHide} variant="white" />
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-md-8'>
                                <img src='https://i.ibb.co/SJLFXL2/Vector10.png' className='Congratimage' />
                            </div>
                            <div className='col-md-8'>
                                <img src='https://i.ibb.co/NmqhYRk/Group-504.png' className='Congratimage' />
                            </div>

                            <div className='col-md-2 offset-md-2 d-flex justify-content-end'>
                                <button className='btn btnstake'>Connect</button>
                            </div>
                        </div>
                        <div>
                            <p className='simpleText'>
                                {props.number}
                            </p>
                        </div>
                        <div className='cardImg'  >
                            <img alt='NftImage' src='https://i.ibb.co/Sdz30VC/Group-505.png' className='underimg' width="50%" />

                            <div className="uperimg row d-flex justify-content-center">
                                {
                                    image.map((items, index) => {

                                        return (
                                            <div className='col-lg-3 col-md-5'>

                                                <img src={items} className="mintImage45" />

                                            </div>
                                        )
                                    })
                                }
                                {/* <img src="https://i.ibb.co/BPqHrwB/tiger-1.jpg" className="mintImage45" /> */}
                            </div>
                        </div>

                        <div className="btnmodelhere">
                            <button className='undermodelbtn me-2'>BREED</button>
                            <button className='undermodelbtn2'>ACCEPT</button>
                        </div>
                    </div>
                </Modal.Header>
            </Modal >
        </div>
    );
}

function congratulation({ show, setShow, number, setNumber }) {
    return (
        <div className='container'>

            <MyVerticallyCenteredModal
                number={number}
                setNumber={setNumber}
                show={show}
                onHide={() => setShow(false)}
            />
        </div>
    )
}

export default congratulation