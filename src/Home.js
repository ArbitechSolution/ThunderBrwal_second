import React, { useState } from 'react'
import Features from './Component/Features/Features'
import GameNFT from './Component/GameNFT/GameNFT'
import Homepage from './Component/Homepage/Homepage'
import MaskGroup from './Component/MaskGroup/MaskGroup'
import Menu from './Component/Menu/Menu'
import NFTImage from './Component/NFTImage/NFTImage'
import PlayToEarn from './Component/PlayToEarn/PlayToEarn'
import Roadmap from './Component/Roadmap/Roadmap'
import TokenDown from './Component/TokenDown/TokenDown'
import WaveImage from './Component/WaveImage/WaveImage'
import { withRouter } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import Mintpage from './Mintpage'
import StakePages from './StakePages'
import Traitspage from './Traitspage'
import BreedPage from './BreedPage'
function Home() {
  const [isChangeRoute, setIsChangeRoute] = useState("main")
  const ChnageMain = () => {
    setIsChangeRoute("main")
  }
  const ChangeStake = () => {
    setIsChangeRoute("StakePages")
  }
  const ChangeMint = () => {
    setIsChangeRoute("Mint")
  }
  const ChangeTraits = () => {
    setIsChangeRoute("Traits")
  }
  const ChangeBreed = () => {
    setIsChangeRoute("breed")
  }
  const Main = () => {
    return (
      <>
        <Navbar
          ChnageMain={ChnageMain}
          ChangeStake={ChangeStake}
          ChangeMint={ChangeMint}
          ChangeTraits={ChangeTraits}
          ChangeBreed={ChangeBreed}
        />
        <Menu />
        <Homepage />
        <TokenDown />
        <WaveImage />
        <Features />
        <MaskGroup />
        <PlayToEarn />
        <GameNFT />
        <NFTImage />
        <Roadmap />
      </>
    )
  }
  const Stake = () => {
    return (
      <>
        <Navbar
          ChnageMain={ChnageMain}
          ChangeStake={ChangeStake}
          ChangeMint={ChangeMint}
          ChangeTraits={ChangeTraits}
          ChangeBreed={ChangeBreed}
        />
        <StakePages />
      </>
    )
  }
  const Mint = () => {
    return (
      <>
        <Navbar
          ChnageMain={ChnageMain}
          ChangeStake={ChangeStake}
          ChangeMint={ChangeMint}
          ChangeTraits={ChangeTraits}
          ChangeBreed={ChangeBreed}
        />
        <Mintpage />
      </>
    )
  }
  const Traits = () => {
    return (
      <>
        <Navbar
          ChnageMain={ChnageMain}
          ChangeStake={ChangeStake}
          ChangeMint={ChangeMint}
          ChangeTraits={ChangeTraits}
          ChangeBreed={ChangeBreed}
        />
        <Traitspage />
      </>
    )
  }
  const Breed = () => {
    return (
      <>
        <Navbar
          ChnageMain={ChnageMain}
          ChangeStake={ChangeStake}
          ChangeMint={ChangeMint}
          ChangeTraits={ChangeTraits}
          ChangeBreed={ChangeBreed}
        />
        <BreedPage />
      </>
    )
  }
  if (isChangeRoute == "main") {
    return (
      <div className='App'>
        <Main />
      </div>
    )
  } else if (isChangeRoute == "StakePages") {
    return (
      <div className='App'>
        <Stake />
      </div>
    )
  } else if (isChangeRoute == "Mint") {
    return (
      <div className='App'>
        <Mint />
      </div>
    )
  } else if (isChangeRoute == "Traits") {
    return (
      <div className='App'>
        <Traits />
      </div>
    )
  } else if (isChangeRoute == "breed") {
    return (
      <div className='App'>
        <Breed />
      </div>
    )
  }
}

export default Home