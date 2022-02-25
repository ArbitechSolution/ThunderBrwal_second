import React from 'react'
import "./Traits.css"
import Accordion from 'react-bootstrap/Accordion'
// import tiger1 from "../../Assets/tiger 1.jpg"
// import tiger2 from "../../Assets/tiger2.jpg"
// import tiger3 from "../../Assets/tiger3.jpg"
// import tiger4 from "../../Assets/tiger4.jpg"
// import tiger5 from "../../Assets/tiger5.jpg"
// import tiger6 from "../../Assets/tiger6.jpg"
function Traits() {
    return (
        <div className='StakePageImage'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-end mt-3'>
                        <button className='btn btnstake'>CONNECT</button>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-3'>
                        <div className='row d-flex justify-content-center d-flex justify-content-md-start'>
                            <div className='col-4 TraitsBox offset-md-1'>
                                TRAITS
                            </div>
                            <div className='col-md-12 col-11  Traitborder '></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 mt-3'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="btn accordion-button " style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Sort
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body text-start text-white">
                                                <input class="check" type="radio" id="html" name="fav_language" value="HTML"/>&nbsp;&nbsp;
                                                <label for="html">Rarity ascending</label><br />
                                                
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Rarity descending</label><br />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12 mt-1'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="btn accordion-button " style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Rarity
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body text-start text-white">
                                                <input class="check" type="radio" id="html" name="fav_language" value="HTML"/>&nbsp;&nbsp;
                                                <label for="html">Normal</label><br />
                                                
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Uncommon</label><br />

                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Rare</label><br />
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Unique</label><br />
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Legendary</label><br />
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Myth</label><br />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12 mt-1 mb-4'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="btn accordion-button " style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Trait
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body text-start text-white">
                                                <input class="check" type="radio" id="html" name="fav_language" value="HTML"/>&nbsp;&nbsp;
                                                <label for="html">Head</label><br />
                                                
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Clothing</label><br />

                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Mouth</label><br />
                                                <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;&nbsp;
                                                <label for="css">Teeth</label><br />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-9'>
                        <div className='row d-flex justify-content-center justify-content-lg-evenly flex-wrap'>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2'>
                              <img src="https://i.ibb.co/BPqHrwB/tiger-1.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2'>
                              <img src="https://i.ibb.co/rFdJD6z/tiger2.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2'>
                              <img src="https://i.ibb.co/N3LFQH2/tiger3.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2 '>
                              <img src="https://i.ibb.co/3pcMPWT/tiger4.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2'>
                              <img src="https://i.ibb.co/sgnDY2H/tiger5.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex  justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                            <div className='col-lg-3 col-10 TraitsBoxxx pt-3 pb-3 m-2'>
                              <img src="https://i.ibb.co/rphxwJr/tiger6.jpg" className="traitsimages"/>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueId mt-3'>
                                  <span >BLUE</span>
                                  <span >HEAD</span>
                              </div>
                              <div className='d-flex justify-content-lg-between justify-content-sm-around justify-content-between BlueIdss mt-3'>
                                  <span >21.59% have this</span>
                                  <span >Normal</span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traits