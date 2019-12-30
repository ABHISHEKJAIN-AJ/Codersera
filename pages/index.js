import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PrimaryHeader from '../components/primaryheader'
import '../css/index.css'
import SecondaryHeader from "../components/secondaryheader";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav/>
    <PrimaryHeader/>
    <SecondaryHeader/>
    <div></div>

  </div>
)

export default Home
