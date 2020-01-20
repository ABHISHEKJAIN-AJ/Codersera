import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../scss/main.scss'
import Footer from "../components/footer";
import AboutPrimaryHeader from "../components/aboutprimaryheader";



const About = () => (
    <div className="app-about">
        <Head>
            <title>About Us</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway|Rubik&display=swap" rel="stylesheet"/>
        </Head>

        <Nav/>
         <AboutPrimaryHeader/>
        <Footer/>

    </div>
)

export default About;
