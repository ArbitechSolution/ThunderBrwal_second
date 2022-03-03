import React, { useState } from 'react'
import Congratulation from './Child-Component/Mint/congratulation'
import Mint from './Child-Component/Mint/Mint'

function Mintpage() {
  let [show,setShow] = useState(false)
  let[number,setNumber]= useState();
  return (
    <div>
      {/* <button onClick={()=>setShow(true)}>click</button> */}
        <Mint setShow={setShow} setNumber={setNumber}/>
        <Congratulation show={show} setShow={setShow} number={number} setNumber={setNumber}/>
    </div>
  )
}

export default Mintpage