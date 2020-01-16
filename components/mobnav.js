import React from 'react'
import Head from "next/head";


const MobNav = () => (
    <div className="mob-nav">
        <div className="mob-nav-content">
        {/*<Head>*/}
{/*            <style  >{*/}
{/*            `             .mob-nav {*/}
{/*        width: 100%;*/}
{/*        height: 8vh;*/}
{/*        background: linear-gradient(to bottom right,#607B7D,#8EB9BC);*/}
{/*        display: flex;*/}
{/*        justify-content: space-between;*/}
{/*        align-items: center;*/}
{/*        }*/}
{/*        .mob-nav-links {*/}
{/*        width: 12%;*/}
{/*        }*/}
{/*        .mob-nav-links-list {*/}
{/*        display: none;*/}
{/*        list-style: none;*/}
{/*        }*/}
{/*        .mob-nav-btn {*/}
{/*    width: 100%;*/}
{/*        }*/}
{/*        .mob-nav-btn span{*/}
{/*            display: block;*/}
{/*    border: .5vh solid white;*/}
{/*    margin: 11% 0;*/}
{/*    width: 70%;*/}
{/*   */}
{/*        }*/}
{/*        */}
{/*        .mob-home {*/}
{/*            display: block;*/}
{/*    width: 30%;*/}
{/*    height: 9vh;*/}
{/*    padding: 2vh;*/}
{/*}`}</style>*/}
{/*        </Head>*/}
        <amp-img src="/home.png" height="9" width="30" className="mob-home" layout="responsive"/>
        <div className="mob-nav-links">

            <div className="mob-nav-btn">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>

            <ul className="mob-nav-links-list">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
                <li>
                    <a>Blogs</a>
                </li>
                <li>
                    <a>Email Finder</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
)

export default MobNav
