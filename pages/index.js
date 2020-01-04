import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PrimaryHeader from '../components/primaryheader'
import '../css/index.css'
import SecondaryHeader from "../components/secondaryheader";
import SectionSteps2_3 from "../components/sectionsteps2-3";
import SectionCoders from "../components/sectioncoders";
import SectionCodersApart from "../components/sectioncodersapart";
import SectionTakeOurWords from "../components/sectiontakeourwords";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
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

export default Home
