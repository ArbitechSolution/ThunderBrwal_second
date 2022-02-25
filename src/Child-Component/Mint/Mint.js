import React, { useEffect, useState } from 'react'
// import Vector10 from "../../Assets/Vector10.png"
// import Rectangle554 from "../../Assets/Rectangle 554.png"
// import tiger1 from "../../Assets/tiger 1.jpg"
import "./Mint.css"
import { toast } from 'react-toastify';
import {nftContratAddress,nftContractAbi} from "../../Component/Utils/Nft"
import {stakingContractAddress,stakingContractAbi} from '../../Component/Utils/Staking'
import {loadWeb3} from '../../Component/Api/api';
// import Group187 from "../../Assets/Group 187.png"
// import Group188 from "../../Assets/Group 188.png"

function Mint({setShow}) {
    let [value, setValue] = useState(1) 
    let [point,setPoint] = useState(0);
  

    const increaseValue= ()=>{
        if(value<3){
            setValue(++value)
            console.log("setValue",value)
        }
        
    }
    const decreaseValue=()=>{
        if(value>1){
            setValue(--value)
            console.log("setValue",value)
        }
      
    }
    const myMint =async()=>{
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
         toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
          toast.error("Wrong Newtwork please connect to test net")
        }else{
            console.log("mintFor");
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(nftContractAbi,nftContratAddress);
            let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi,stakingContractAddress);
            let bpCalculator = await stakingCOntractOf.methods.balances(acc).call();
            setPoint(bpCalculator)
            let mintingPrice = await nftContractOf.methods.MinitngPrice().call();
            let supply = await nftContractOf.methods.totalSupply().call();
            let maxSupply = await nftContractOf.methods.maxsupply().call();
            if(parseFloat(bpCalculator)>=parseFloat(mintingPrice)){
                if(parseFloat(maxSupply)>=parseFloat(supply)){
                    await nftContractOf.methods.mint(value).send({
                        from:acc
                    })
                    toast.success("Transaction Confirmed")
                    setShow(true)
                    
                }else{
                    toast.error("Maximum minting reached")
                }

            }else{
                toast.error("You do not have enought Brawl points")
            }
            
        }
    }

     const SupplyTotal = async()=>{
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            console.log("No Wallet Connected");
        //  toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
          toast.error("Wrong Newtwork please connect to test net")
        }else{
            try{
                const web3= window.web3
               let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi,stakingContractAddress);
               let bpCalculator = await stakingCOntractOf.methods.balances(acc).call();
               setPoint(bpCalculator)
            }catch(e){
               console.log("Error", e);
            }
        }
         
     }
    const mintForLp=async()=>{
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
         toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            console.log("Wrong Network");
        //   toast.error("Wrong Newtwork please connect to test net")
        }else{
            console.log("mintForLp");
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(nftContractAbi,nftContratAddress);
            let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi,stakingContractAddress);
            let bpLpCalculator = await stakingCOntractOf.methods.BPcalculatorforLP(acc).call();
            let mintingPrice = await nftContractOf.methods.MinitngPrice().call();
            let supply = await nftContractOf.methods.supply().call();
            let maxSupply = await nftContractOf.methods.maxsupply().call();
            if(parseFloat(bpLpCalculator)>=parseFloat(mintingPrice)){
                if(parseFloat(maxSupply)>=parseFloat(supply)){
                    await nftContractOf.methods.mintnftforLP().send({
                        from:acc
                    })
                    toast.success("Transaction Confirmed")
                    await stakingCOntractOf.methods.redeemforLP(mintingPrice).send({
                        from:acc
                    })
                    toast.success("Transaction Confirmed")

                }else{
                    toast.error("Maximum minting reached")
                }

            }else{
                toast.error("You do not have enought Brawl points")
            }
            
        }
    }
    setInterval(() => {
        SupplyTotal()
      }, 1000);
    useEffect(()=>{

        SupplyTotal();
       })
    return (
        <div className='StakePageImage'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12 col-11 Stakeboxs pt-4 pb-4'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <img src="https://i.ibb.co/SJLFXL2/Vector10.png" className="stakeimage" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='stakepageP'>Mint</p>
                            </div>
                        </div>

                        <div className='row pt-4 pb-4 d-flex justify-content-center '> 
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <img src="https://i.ibb.co/yyNVLVb/Rectangle-554.png" className="mintImage1"/>
                            <img src="https://i.ibb.co/BPqHrwB/tiger-1.jpg" className="mintImage2"/>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                            <div className='text-start'>
                            <span className='mintspane'>Your Brawl:</span>&nbsp; &nbsp;
                            <span className='mintspane1'>{point} Point</span>
                            </div>
                            {/* <div className='text-start pt-lg-3 pt-2'>
                            <span className='mintspane'>BRL Spend:</span>&nbsp; &nbsp;
                            <span className='mintspane1'>100 Point</span>
                            </div> */}
                            <div className='d-flex flex-row pt-lg-5 pt-3'>
                                <a  style={{cursor: "pointer"}}><img onClick={()=>decreaseValue()} src="https://i.ibb.co/FswxxGJ/Group-187.png" width="60px"/></a>
                                <div className='mintboxsss mt-1 ms-4'>{value}</div>
                                <a className='ms-4'style={{cursor: "pointer"}}><img   onClick={()=>increaseValue()} src="https://i.ibb.co/ZGpn9P7/Group-188.png" width="60px"/></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                <button onClick={()=>{myMint()}} className='btn mintbtn '>MINT </button>
                                {/* <button onClick={()=>mintForLp()} className='btn mintbtn ms-4  '>MINT FOR LP</button> */}
                            </div>
                            <span className='mintspan23 pt-lg-5 pt-3'>MAXIMUM OF 10 tiger nfts CARD PER tx</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-11 mint-Page-border '>
                         <div className='row pt-3 text-start text-sm-center '>
                             <div className='col-sm-4'>
                                 <span className='Mint-Time text-start'>Time</span>
                             </div>
                             <div className='col-sm-2'>
                                 <span className='Mint-Time'>Type</span>
                             </div>
                             <div className='col-sm-2'>
                                 <span className='Mint-Time'>Amount</span>
                             </div>
                             <div className='col-sm-1'>
                                 <span className='Mint-Time'>Status</span>
                             </div>
                             <div className='col-sm-3'>
                                 <span className='Mint-Time'>TX</span>
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

export default Mint