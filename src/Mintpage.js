import React, { useState } from 'react'
import Congratulation from './Child-Component/Mint/congratulation'
import Mint from './Child-Component/Mint/Mint'

function Mintpage() {
  let [show,setShow] = useState(false)
  return (
    <div>
      {/* <button onClick={()=>setShow(true)}>click</button> */}
        <Mint setShow={setShow}/>
        <Congratulation show={show} setShow={setShow} />
    </div>
  )
}

export default Mintpage