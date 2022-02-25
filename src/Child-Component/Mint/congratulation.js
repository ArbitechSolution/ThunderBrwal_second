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
                    <div className='row' style={{border: "2px solid red"}}>
                        <div className='col-md-8' style={{border: "2px solid red"}}>
                            <img src='https://i.ibb.co/SJLFXL2/Vector10.png' className='Congratimage'/>
                        </div>
                        <div className='col-md-2 offset-md-2 d-flex justify-content-end' style={{border: "2px solid red"}}>
                        <button className='btn btnstake'>Connect</button>
                        </div>
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