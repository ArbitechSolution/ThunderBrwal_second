import React, { useEffect, useState } from 'react'
import "./MyCollection.css"
import { loadWeb3 } from '../../Component/Api/api';
import Web3 from 'web3';
import { nftContratAddress, nftContractAbi } from "../../Component/Utils/Nft"
import axios from 'axios';
function MyCollection() {
    let max = 200;
    let [btnTxt, setBtTxt] = useState("Connect")
    // let [collection, setCollection] = useState([])
    let [test, setTest] = useState([])
    const [limit, setlimit] = useState(6);
    const [num, setnum] = useState(0);

    const mycollection = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            console.log("wallet");
            setBtTxt("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);


            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(nftContractAbi, nftContratAddress);
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
            let walletLength = walletOfOwner.length
            console.log("walletOfOwner", walletLength);
            let resArray = []
            let dummyAray = [...test];
            dummyAray.map((item) => {
                resArray.push(item)
            })


            for (let i = 1; i < walletLength; i++) {

                let passVariable = walletOfOwner[i];


                await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${passVariable}.json`).then((res) => {
                    resArray.push(res);
                    console.log("res", res.data);
                })

            }
            setTest(resArray);
        }
    }

    const ClickNext = () => {
        if(limit < max && limit >= 0){
            setlimit(limit + 6);
            setnum(num + 6);
        }
    }
    const ClickPrevious =()=>{
        if(limit <= max && limit > 6){
            setlimit(limit - 6);
            setnum(num - 6);
        }
    }
    useEffect(() => {
        mycollection();
    }, [])
    return (
        <div className='StakePageImagess pb-5'>
            <div className='container pt-3'>
                <div className='row d-flex justify-content-center align-items-center pb-3'>
                    <div className='col-md-12 col-11 pt-4 pb-4'>
                        <div className='row collections'>
                            <div className='col-md-4 offset-md-4 text-center d-flex align-items-center'>
                                <p className='stakepageP'>My NFT Collection</p>
                            </div>
                            <div className='col-md-3 d-flex justify-content-end'>
                                <button className='btn btnstake'>{btnTxt}</button>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center mt-3'>
                            {test.slice(num, limit).map((items) => {
                                return (
                                    <div className='col-lg-3 col-md-5 mycollections p-2 m-2'>
                                        <img src={items.data.image} className='myCollectionsImage ' />
                                        <span className='imageText text-white'  >&nbsp;&nbsp;{items.data.dna}</span>
                                        <div>
                                            <p className='collectionsText mt-3'>#20211 Tiger Master</p>
                                            <p className='collectionsTextSmall'>Common</p>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className='btn btnStakePage' size="lg">
                                                Transfer
                                            </button>
                                        </div>

                                    </div>
                                )



                            })}
                        </div>

                    </div>
                    <div className='row d-flex flex-row justify-content-center justify-content-evenly' >

                        <div className='col-1 d-flex align-items-center justify-content-center' onClick={ClickPrevious} style={{cursor:"pointer"}}>
                            <img src="https://i.ibb.co/FBMT5Lv/Rectangle-551.png" style={{ position: "absolute" }} />
                            <img src="https://i.ibb.co/NjDtXXY/Vector12.png" style={{ position: " relative" }} />
                        </div>
                        <div className='col-lg-3 col-md-5 col d-flex flex-row align-items-center justify-content-evenly'>
                            <span className='MyCollectionspan'>Current</span>
                            <div className='bosCollection'>
                                <span className='mycollectionsP '>1</span>
                            </div>
                            <span className='MyCollectionspan'>/3</span>
                        </div>

                            {/* <button className='btn '> */}
                        <div className='col-1 d-flex align-items-center justify-content-center ms-4' onClick={ClickNext} style={{cursor:"pointer"}}>
                            <img src="https://i.ibb.co/FBMT5Lv/Rectangle-551.png" style={{ position: "absolute" }} />
                            <img src="https://i.ibb.co/n1ZWTmj/Vector13.png" style={{ position: " relative" }} />
                        </div>
                            {/* </button> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyCollection