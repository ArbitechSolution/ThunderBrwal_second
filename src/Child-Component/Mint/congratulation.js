import React from 'react'
import Modal from "react-bootstrap/Modal";
import CloseButton from 'react-bootstrap/CloseButton'
import "./congratulation.css"
function MyVerticallyCenteredModal(props) {
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
                                You Got a tiger mask card now!
                            </p>
                        </div>
                        <div className='cardImg'  >
                            <img alt='NftImage' src='https://i.ibb.co/Sdz30VC/Group-505.png' className='underimg' width="50%" />

                            <div className="uperimg">

                                <img src="https://i.ibb.co/BPqHrwB/tiger-1.jpg" className="mintImage45" />
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

function congratulation({ show, setShow }) {
    return (
        <div className='container'>

            <MyVerticallyCenteredModal
                show={show}
                onHide={() => setShow(false)}
            />
        </div>
    )
}

export default congratulation