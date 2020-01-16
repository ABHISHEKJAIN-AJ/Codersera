import React from 'react'
import Head from "next/head";

const MobPrimaryHeader = ()=>(
    <div className="mob-primary-header">
        <div className="mob-primary-header-content">
        {/*<Head>*/}
 {/*           <style>*/}
 {/*               {`  .mob-primary-header {*/}
 {/*           height: 39vh;*/}
 {/*           width: 100%;*/}
 {/*           background: url(/nav-bg.png);*/}
 {/*           background-size: cover;*/}
 {/*           color: white;*/}
 {/*           }*/}
 {/*           .mob-primary-header-content-text {*/}
 {/*   padding: 6% 0 0 4%;*/}
 {/*           }*/}
 {/*           .mob-primary-header-content-text h2 {*/}
 {/*           font-family: montserrat;*/}
 {/*           padding: 4% 0;*/}
 {/*           }*/}
 {/*           .mob-primary-header-content-text p span {*/}
 {/*           font-family: helvetica;*/}
 {/*           display: block;    */}
 {/*           font-size: 75%;*/}
 {/*           }*/}
 {/*           */}
 {/*           .mob-primary-header-content-circle {*/}
 {/*           height: 40vh;*/}
 {/*           width: 64%;*/}
 {/*   margin: 12% auto;*/}
 {/*   background: #DFDFDF;*/}
 {/*   clip-path: circle();*/}
 {/*   }*/}
 {/*   .mob-primary-header-content-options-1 {*/}
 {/*   */}
 {/*  background-color: white;*/}
 {/*   clip-path: circle();*/}
 {/*   height: 14vh;*/}
 {/*   width: 22%;*/}
 {/*   float: left;*/}
 {/*   padding: 3%;*/}
 {/*    transform: translate(212%, 65%); */}
 {/*   transform: translate(178%, -368%);*/}
 {/*   }*/}
 {/*   .mob-primary-header-content-options-1 amp-img {*/}
 {/*width: 100%;*/}
 {/*height:100%;*/}
 {/*   */}
 {/*   }`}*/}
 {/*           </style>*/}
 {/*       // </Head>*/}
            <div className="mob-primary-header-content-text">
                <h2>CODERSERA</h2>
                <p>
                    <span>A Global Community Of Top Coders,</span>
                    <span>Designers, CTOs, QAs, & PMs</span>
                </p>
            </div>
            <div className="mob-primary-header-content-options">
                <div className="mob-primary-header-content-circle"></div>
                <div className="mob-primary-header-content-option option-1">
                    <amp-img src="/angular.png" height="200" width="100" layout="responsive" />
                </div>
                <div className="option-1-name">Angular</div>
                <div className="mob-primary-header-content-option option-2">
                    <amp-img src="/java.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-2-name">Java</div>
                <div className="mob-primary-header-content-option option-3">
                    <amp-img src="/apple.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-3-name">Ios</div>
                <div className="mob-primary-header-content-option option-4">
                    <amp-img src="/node.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-4-name">Node</div>
                <div className="mob-primary-header-content-option option-5">
                    <amp-img src="/ruby.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-5-name">Ruby</div>
                <div className="mob-primary-header-content-option option-6">
                    <amp-img src="/android.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-6-name">Android</div>
                <div className="mob-primary-header-content-option option-7">
                    <amp-img src="/python.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-7-name">Python</div>
                <div className="mob-primary-header-content-option option-8">
                    <amp-img src="/react.png" height="200" width="100" layout="responsive"/>
                </div>
                <div className="option-8-name">React</div>
                <div className="mob-primary-header-content-option-btn btn-1">Apply as Coder</div>
                <div className="mob-primary-header-content-option-btn btn-2">Hire a Coder</div>
            </div>
        </div>
    </div> )

export default MobPrimaryHeader;