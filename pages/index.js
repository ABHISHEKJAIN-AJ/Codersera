import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PrimaryHeader from '../components/primaryheader'
// import '../css/index.css'
import '../scss/main.scss'
import SecondaryHeader from "../components/secondaryheader";
import SectionSteps2_3 from "../components/sectionsteps2-3";
import SectionCoders from "../components/sectioncoders";
import SectionCodersApart from "../components/sectioncodersapart";
import SectionTakeOurWords from "../components/sectiontakeourwords";
import Footer from "../components/footer";
import {useAmp} from "next/amp";
import MobNav from "../components/mobnav";
import MobPrimaryHeader from "../components/mobprimaryheader";
import MobSecondaryHeader from "../components/mobsecondaryheader";
import MobSectionCoders from "../components/mobsectioncoders";
import MobSectionSteps2_3 from "../components/mobsectionsteps2-3";
import MobSectionCodersApart from "../components/mobsectioncodersapart";
import MobSectionTakeOurWords from "../components/mobsectiontakeourwords";

export const config = { amp: 'hybrid' };



const Home = () => {
    const isAmp = useAmp();

    return isAmp?(
        <div className="mob-app-home">
            <Head>
                <title>Home</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway|Rubik&display=swap" rel="stylesheet"/>
                <script async src="https://cdn.ampproject.org/v0.js"/>
                {/*<style amp-boilerplate>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{ visibility:hidden }to{visibility:visible}}`}</style>*/}
                {/*<noscript>*/}
                    {/*<style amp-boilerplate>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>*/}


            {/*    <style >*/}
            {/*        {`*/}
            {/** {*/}
            {/*margin: 0;*/}
            {/*padding: 0;*/}
            {/*box-sizing: border-box;*/}
            {/*}*/}

            {/*`}*/}

            {/*    </style>*/}
            {/*    </noscript>*/}
            </Head>
        <MobNav/>
        <MobPrimaryHeader/>
        <MobSecondaryHeader/>
        <MobSectionCoders/>
        <MobSectionSteps2_3/>
        <MobSectionCodersApart/>
        <MobSectionTakeOurWords/>

        </div>
        ):
        ( <div className="app-home">
                <Head>
                    <title>Home</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway|Rubik&display=swap" rel="stylesheet"/>
                </Head>

                <Nav/>
                <PrimaryHeader/>
                <SecondaryHeader/>
                <SectionSteps2_3/>
                <SectionCoders/>
                <SectionCodersApart/>
                <SectionTakeOurWords/>
                <Footer/>

            </div>
        )
}


export default Home;
