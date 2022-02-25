import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import "./Navbar.css"

import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { RiGithubLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
function NavbarId({ ChnageMain, ChangeStake, ChangeMint, ChangeTraits, ChangeBreed }) {
    return (
        <div className='navbariamge'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>


                        <Navbar collapseOnSelect expand="lg" variant="dark">
                            {/* <Container> */}
                            <Navbar.Brand href="#home"><img src="https://i.ibb.co/J5BD1S8/logo.png" width="40px" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav >
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#" onClick={() => { ChnageMain() }}>HOME</Nav.Link>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#about" onClick={() => { ChnageMain() }}>ABOUT</Nav.Link>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#token" onClick={() => { ChnageMain() }}>TOKEN</Nav.Link>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#features" onClick={() => { ChnageMain() }}>FEATURES</Nav.Link>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#nft" onClick={() => { ChnageMain() }}>NFT</Nav.Link>
                                    <li class="nav-item dropdown">
                                        <a className="nav-link text-whitess ms-1 text-white" href="#home" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            STAKING & NFT
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {/* <Link to="/StakePages">  */}
                                            <li><a className="dropdown-item text-white" href="#StakePages" onClick={() => {
                                                ChangeStake();
                                                window.scrollTo(0, 0);
                                            }}>
                                                STAKE & POINT </a></li>
                                            {/* </Link> */}
                                            {/* <Link to="/mint"> */}
                                            <li><a className="dropdown-item text-white" href="#Mint" onClick={() => { ChangeMint(); window.scrollTo(0, 0); }}>MINT</a></li>
                                            {/* </Link> */}
                                            <li><a className="dropdown-item text-white" href="#breed" onClick={() => { ChangeBreed(); window.scrollTo(0, 0); }}>BREED</a></li>
                                            <li><a className="dropdown-item text-white" href="#">BUY POINT</a></li>
                                            <li><a className="dropdown-item text-white" href="#">NFT STAKING</a></li>
                                            {/* <Link to="/traits"> */}
                                            <li><a className="dropdown-item text-white" href="#Traits" onClick={() => { ChangeTraits(); window.scrollTo(0, 0); }}>TRAITS</a></li>
                                            {/* </Link>  */}
                                            <li><a className="dropdown-item text-white" href="#">RANKING</a></li>
                                            <li><a className="dropdown-item text-white" href="#">MY COLLECTION</a></li>
                                        </ul>
                                    </li>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#maskgroup" onClick={() => { ChnageMain() }}>GAME</Nav.Link>
                                    <Nav.Link className='text-whitess ms-1 text-white' href="#roadmap" onClick={() => { ChnageMain() }}>ROADMAP</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className='flex-row justify-content-evenly'>
                                    <Nav.Link href="https://t.me/thb_community" target="_blank"><FaTelegramPlane size={28} className="icon" /></Nav.Link>
                                    <Nav.Link href="https://twitter.com/THB_crypto" target="_blank"><BsTwitter size={28} className="icon" /></Nav.Link>
                                    <Nav.Link href="https://github.com/Thunderbrawl-coin" target="_blank"><RiGithubLine size={28} className="icon" /></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                            {/* </Container> */}
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarId