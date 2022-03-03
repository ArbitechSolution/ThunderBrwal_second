import React, { useState, useEffect, useRef } from 'react'
import "./StakePage.css"
import { loadWeb3 } from '../../Component/Api/api'
import Web3 from "web3";
import { thbTokenAddress, thbTokenAbi } from "../../Component/Utils/ThbToken"
import { thbLpTokenAddress, thbLpTokenAbi } from '../../Component/Utils/ThbLpToken'
import { stakingContractAddress, stakingContractAbi } from '../../Component/Utils/Staking'
import { toast } from 'react-toastify';
import { nftContratAddress, nftContractAbi } from '../../Component/Utils/Nft'
// import Vector10 from "../../Assets/Vector10.png"
// import B from "../../Assets/--02 1.png"
// import vector99 from "../../Assets/vector 99.png"
// import vector100 from "../../Assets/100 2.png"
function StakePage() {
  let stakeAmount = useRef(0);
  let stakeAmountLp = useRef(0);

  let [btnTxt, setBtTxt] = useState("Connect Wallet")
  let [thbBalance, setThbBalance] = useState(0);
  let [thbLpBalance, setThbLpBalance] = useState(0);
  let [brlPoint, setBrlPoint] = useState(0);
  let [brlLpPoint, setBrlLpPoint] = useState(0);
  let [staked, setStaked] = useState(0);
  let [lpStaked, setLpStaked] = useState(0);





  const getAccount = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);

      const web3 = window.web3;
      let thbTokenContractOf = new web3.eth.Contract(thbTokenAbi, thbTokenAddress);
      let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);

      let userthbBalance = await thbTokenContractOf.methods.balanceOf(acc).call();
      userthbBalance = web3.utils.fromWei(userthbBalance)
      userthbBalance = parseFloat(userthbBalance).toFixed(3)
      setThbBalance(userthbBalance);

      let userThbData = await stakingCOntractOf.methods.User(acc).call();
      let userBrawlPoint = await stakingCOntractOf.methods.BPcalculator(acc).call()
      let tAmount = userThbData.Tamount;
      tAmount = web3.utils.fromWei(tAmount)
      setStaked(tAmount)
      setBrlPoint(userBrawlPoint);
    }
  }

  const getData = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {

      try {
        const web3 = window.web3;
        let thbLpTokenContractOf = new web3.eth.Contract(thbLpTokenAbi, thbLpTokenAddress);
        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);

        let userThbLpBalance = await thbLpTokenContractOf.methods.balanceOf(acc).call();
        userThbLpBalance = web3.utils.fromWei(userThbLpBalance);
        userThbLpBalance = parseFloat(userThbLpBalance).toFixed(3);
        setThbLpBalance(userThbLpBalance);

        let userThbLpData = await stakingCOntractOf.methods.UserLP(acc).call();
        let userBrawlLpPoint = await stakingCOntractOf.methods.BPcalculatorforLP(acc).call()
        let tAMountLp = userThbLpData.Tamount;
        tAMountLp = web3.utils.fromWei(tAMountLp);
        setBrlLpPoint(userBrawlLpPoint);
        setLpStaked(tAMountLp);
      } catch (e) {
        console.log("Error while getting lp data", e);
      }

    }
  }





  const stakeVal = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")

    } else {
      try {

        let enteredVal = stakeAmount.current.value;
        console.log("U NEterd", enteredVal);
        const web3 = window.web3;

        let thbTokenContractOf = new web3.eth.Contract(thbTokenAbi, thbTokenAddress);
        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        if (enteredVal > 0) {
          if (parseFloat(thbBalance) >= parseFloat(enteredVal)) {
            if (staked <= 0) {
              enteredVal = web3.utils.toWei(enteredVal.toString());
              await thbTokenContractOf.methods.approve(stakingContractAddress, enteredVal.toString()).send({
                from: acc
              })
              toast.success("Transaction Confirmed")
              await stakingCOntractOf.methods.Stake(enteredVal.toString()).send({
                from: acc
              })
              stakeAmount.current.value = ""
              toast.success("Transaction Confirmed")

            } else {
              toast.error("You Have Already Staked. Please Unstake and try again")
            }



          } else {
            toast.error("Insufficient balance")
            console.log("Insufficient Balance");
          }

        } else {
          console.log("Staking Amount must be greater than 0");
          toast.error("Staking Amount must be greater than 0")
        }
      } catch (e) {
        console.log("Error while staking amount", e);
        toast.error("Transaction Failed")
      }
    }
  }
  const unstake = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("Not Connected to Wallet")

    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {
      try {

        const web3 = window.web3
        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        if (staked > 0) {
          await stakingCOntractOf.methods.withdrawtoken().send({
            from: acc
          })
          toast.success("Transaction Confirmed")
        } else {
          toast.error("You have not staked yet")
          console.log("You have not staked yet");
        }


      } catch (e) {
        console.log("Error while staking amount", e);
        toast.error("Transaction Failed")

      }
    }

  }

  const stakeLpVal = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      try {


        let enteredVal = stakeAmountLp.current.value;

        console.log("U NEterd", enteredVal);
        const web3 = window.web3;

        let thbLpTokenContractOf = new web3.eth.Contract(thbLpTokenAbi, thbLpTokenAddress);
        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        if (enteredVal > 0) {
          if (parseFloat(thbLpBalance) >= parseFloat(enteredVal)) {
            if (lpStaked <= 0) {
              enteredVal = web3.utils.toWei(enteredVal.toString());

              await thbLpTokenContractOf.methods.approve(stakingContractAddress, enteredVal.toString()).send({
                from: acc
              })
              toast.success("Transaction Confirmed")
              await stakingCOntractOf.methods.StakeforLP(enteredVal.toString()).send({
                from: acc
              })
              stakeAmountLp.current.value = ""
              toast.success("Transaction Confirmed")
            } else {
              toast.error("You have staked already. Unstake and try again.")
            }


          } else {
            toast.error("Insufficient Balance")
            console.log("Insufficient Balance");
          }

        } else {
          console.log("Staking Amount must be greater than 0");
          toast.error("Staking Amount must be greater than 0")
        }
      } catch (e) {
        console.log("Error while staking amount", e);
        toast.error("Transaction Failed")

      }
    }
  }

  const unstakeLp = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      try {

        let timestamp = Math.floor(new Date().getTime() / 1000)
        console.log("timestamp", timestamp);

        const web3 = window.web3;
        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        let lpLockTime = await stakingCOntractOf.methods.LPlocktime().call()
        let userLP = await stakingCOntractOf.methods.UserLP(acc).call()
        let depositTimes = userLP.Deposit_time
        let AddTime = +lpLockTime + +depositTimes;
        console.log("AddTime", AddTime);
        if (lpStaked > 0) {
          if (timestamp >= AddTime) {
            await stakingCOntractOf.methods.withdrawLPtoken().send({
              from: acc
            })
            toast.success("Transaction Confirmed")
          } else {
            toast.error("Unlocked Time Not Reached !")
          }


        } else {
          toast.error("You have not staked any Lp Tokens yet")
          console.log("You have not staked any Lp Tokens yet");
        }

      } catch (e) {
        console.log("Error while staking amount", e);
        toast.error("Transaction Failed")
      }
    }
  }

  const RedeemTHB = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      try {
        const web3 = window.web3
        let redeemContract = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        const BPBlance = await redeemContract.methods.BPcalculator(acc).call();
        if (BPBlance > 0) {

          await redeemContract.methods.redeem().send({
            from: acc
          })
          toast.success("Transaction Confirmed")
        } else {
          toast.error("You have no Brawl Point yet")
          console.log("You have not staked yet");
        }

      } catch (e) {
        console.log("Error while Redeem", e);
        toast.error("Transaction Failed")
      }

    }
  }

  const RedeemLPTHP = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      try {
        const web3 = window.web3
        let redeemLPContract = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
        let blanceLP = await redeemLPContract.methods.BPcalculatorforLP(acc).call();
        if (blanceLP > 0) {
          await redeemLPContract.methods.redeemforLp().send({
            from: acc
          })
          toast.success("Transaction Confirmed")
        } else {
          toast.error("You have no LP Brawl Point yet")
          console.log("You have not staked yet");
        }

      } catch (e) {
        console.log("Error while RedeemLP", e);
        toast.error("Transaction Failed")
      }
    }
  }




  useEffect(() => {
    setInterval(() => {
      getAccount();
      getData();
    }, 800);
  }, []);



  return (
    <div className='StakePageImage'>
      <div className='container pt-3'>
        <div className='row d-flex justify-content-center align-items-center pb-3'>
          <div className='col-md-12 col-11 Stakeboxs pt-4 pb-4'>
            <div className='row '>
              <div className='col-md-8 offset-md-2 d-flex align-items-center'>
                <img src="https://i.ibb.co/SJLFXL2/Vector10.png" className="stakeimage" />
              </div>
              <div className='col-md-2 d-flex justify-content-end'>
                <button className='btn btnstake'>{btnTxt}</button>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <p className='stakepageP'>Stake $ THB Tokens to Earn BRL Points</p>
              </div>
            </div>
            <div className='row d-flex justify-content-center justify-content-evenly pt-4'>
              <div className='col-lg-4 col-11 '>
                <div className='row Stakeboxs1'>
                  <div className='col-12 pt-3'>
                    <p className='text-white fs-5 fw-bold mt-1'><img src="https://i.ibb.co/pfXvJYN/02-1.png" width="35px" /> THB</p>
                  </div>
                  <div className='col-md-12'>
                    <img src="https://i.ibb.co/Z17SP2h/vector-99.png" className="StakeImagessss" />
                  </div>

                  <div className='row d-flex justify-content-center mt-4 '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Wallet</p>
                      <p className='text-end'>{parseInt(thbBalance)} THB</p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>BRL Point: </p>
                      <p className='text-end'> {brlPoint}</p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Staked:</p>
                      <p className='text-end'>{staked}</p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-6' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Enter THB</p>
                    </div>
                    <div className="col-6">
                      <input
                        ref={stakeAmount}
                        className="stakeinput form-control mx-3"
                        placeholder="0"
                        type="Number"
                        name="second_input"
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center second-box '>
                    <div className='col-md-12 col-11  pt-3 pb-3'>
                      <div className="d-grid gap-2">
                        <button onClick={() => stakeVal()} className='btn btnStakePage' size="lg">
                          Approve & Stake
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button className='btn btnStakePage' size="lg" onClick={() => unstake()}>
                          Unstake
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button className='btn btnStakePage' size="lg" onClick={() => RedeemTHB()}>
                          Redeem
                        </button>
                      </div>
                    </div>
                    {/* <div className='col-md-12 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button onClick={()=>unstake()} className='btn btnStakePage' size="lg">
                          Unstake
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
                <ul className='game-order-list text-start' >
                  <li className='gamelist' style={{ fontSize: "18px" }}>Stake THB token to earn Energy point.</li>
                  <li className='gamelist' style={{ fontSize: "18px" }}>You can Unstake anytime.</li>
                  <li className='gamelist' style={{ fontSize: "18px" }}>THB rewards are calculated per block</li>
                </ul>
                <ul className='StakeOrder'>
                  <li className='Stakelist'>20,000 Point = 1 random card</li>
                  <li className='Stakelist'>*Min staking 500 THB</li>
                  <li className='Stakelist'>*Max staking 30,000 THB</li>
                </ul>
              </div>

              <div className='col-lg-4 col-11 '>
                <div className='row Stakeboxs1'>
                  <div className='col-12 pt-3'>
                    <p className='text-white fs-5 fw-bold mt-1'><img src="https://i.ibb.co/pfXvJYN/02-1.png" width="35px" /> THB/BNB</p>
                  </div>
                  <div className='col-md-12'>
                    <img src="https://i.ibb.co/X32t6X6/100-2.png" className="StakeImagessss" />
                  </div>

                  <div className='row d-flex justify-content-center mt-4 '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Wallet</p>
                      <p className='text-end'>{parseInt(thbLpBalance)} THB/BNB</p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>BRL Point: </p>
                      <p className='text-end'>{parseInt(brlLpPoint)} </p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-md-12' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Staked:</p>
                      <p className='text-end'>{lpStaked}</p>
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center '>
                    <div className='col-6' id="Balanceview">
                      <p className='fw-bold text-start' style={{ color: "#F8B815" }}>Enter THB LP</p>
                    </div>
                    <div className="col-6">
                      <input
                        ref={stakeAmountLp}
                        // name="first_input"
                        className="stakeinput form-control mx-3"
                        placeholder="0"
                        type="Number"

                        name="second_input"

                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center second-box '>
                    <div className='col-md-12 col-11  pt-3 pb-3'>
                      <div className="d-grid gap-2">
                        <button onClick={() => stakeLpVal()} className='btn btnStakePage' size="lg">
                          Approve & Stake
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button className='btn btnStakePage' size="lg" onClick={() => unstakeLp()}>
                          Unstake
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button className='btn btnStakePage' size="lg" onClick={() => RedeemLPTHP()}>
                          Redeem
                        </button>
                      </div>
                    </div>
                    {/* <div className='col-md-12 col-11 pb-3'>
                      <div className="d-grid gap-2">
                        <button onClick={()=>unstakeLp()} className='btn btnStakePage' size="lg">
                          Unstake
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
                <ul className='game-order-list text-start' >
                  <li className='gamelist' style={{ fontSize: "18px" }}>Stake THB/BNB token to earn Energy point.</li>
                  <li className='gamelist' style={{ fontSize: "18px" }}>You can not Unstake until end of time.</li>
                  <li className='gamelist' style={{ fontSize: "18px" }}>THB rewards are calculated per block.</li>
                </ul>
                <ul className='StakeOrder'>
                  <li className='Stakelist'>THB/BNP staking = 10,000 point a day * 1BNB value base</li>
                  <li className='Stakelist'>20,000 Point = 1 random card</li>
                  <li className='Stakelist'>* Min staking 0.1 BNB</li>
                  <li className='Stakelist'>* Max staking 6 BNB</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakePage