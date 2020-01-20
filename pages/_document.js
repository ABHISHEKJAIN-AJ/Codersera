import Document from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                            }
                            
                        html {
                            font-size: 62.5%;
                            }
                            
                        @media screen and (max-width: 600px) {
                            html {
                                font-size: 37.5%;
                                }
                            }

           
                        .mob-nav {
                            height: 7rem;
                            background: linear-gradient(to bottom right,#607B7D,#8EB9BC);
                            }
                        
                        .mob-nav-content {
                            max-width: 128rem;
                            margin: 0 auto;
                            position: relative;
                            }
                        
                        .mob-home {
                            position: absolute;
                            top: 1rem;
                            left: 2rem;
                            width: 15rem;
                            height: 5rem;
                            }        
                            
                        .mob-nav-links {
                            position: absolute;
                            top: 1.5rem;
                            right: 2rem;
                            }
                            
                        .mob-nav-btn {
                            height: 3rem;
                            width: 4rem;
                            }
                        
                        .mob-nav-btn span {
                            border-top: .8rem solid white;
                            display: block;
                            padding-bottom: .8rem;
                            }
                        
                        .mob-nav-links-list {
                            display: none;
                            }
                            
                        .mob-primary-header {
                            background: url("/nav-bg.png");
                            background-size: cover;
                            height: 50rem;
                            color: white;
                            }
                         
                        .mob-primary-header-content {
                            max-width: 128rem;
                            margin: 0 auto;
                            }
                        
                        .mob-primary-header-content-text {
                            padding: 11rem 3rem;
                            }
                          
                        .mob-primary-header-content-text h2 {
                            font-size: 5rem;
                            font-family: montserrat;
                            margin-bottom: 10rem;
                            }
                            
                        .mob-primary-header-content-text p {
                            font-size: 3rem;
                            font-family: Helvetica;
                            line-height: 4rem;
                            }
                            
                        .mob-primary-header-content-text p span {
                            display: block;
                            }
                            
                        .mob-primary-header-content-circle {
                            max-width: 50rem;
                            height: 50rem;
                            background: #DFDFDF;
                            margin: -4rem auto;
                            clip-path: circle();
                            }
                            
                        .mob-primary-header-content-option {
                            max-width: 14rem;
                            height: 14rem;
                            border-radius: 50%;
                            box-shadow: 0 .2rem 1rem rgba(0,0,0,.22);
                            background: white;
                            padding: 2rem;
                            margin: 0 auto;
                          
                            }
                        .mob-primary-header-content-option amp-img {
                            height: 100%;
                            width: 100%;
                            }
                           
                        .option-1 {
                            transform: translate(0rem, -52rem);
                            }
                            
                        .option-2 {
                            transform: translate(15rem, -60rem);
                            }
                            
                        .option-3 {
                            transform: translate(23rem, -60rem);
                            }
                            
                        .option-4 {
                            transform: translate(15rem, -60rem);
                            }
                            
                        .option-5 {
                            transform: translate(0rem, -66rem);
                            }
                            
                        .option-6 {
                            transform: translate(-15rem, -93rem);
                            }
                            
                        .option-7 {
                            transform: translate(-23rem, -125.5rem);
                            }
                            
                        .option-8 {
                            transform: translate(-15rem, -158.5rem);
                            }
                            
                        .mob-primary-header-content-option-btn {
                            max-width: 36rem;
                            font-size: 2rem;
                            padding: 2rem;
                            background: #303D41;
                            color: white;
                            text-transform: none;
                            border-radius: 5rem;
                            box-shadow: 0 .1rem .5rem .2rem rgba(35,35,35,33);
                            font-family: montserrat;
                            margin: 0 auto;
                            }
                            
                        .btn-1 {
                            transform: translate(-23rem, -110.5rem);
                            }
                                
                        .btn-2 {
                            transform: translate(23rem, -117rem);
                            }
                            
                        .mob-primary-header-content-options {
                            font-size: 2rem;
                            font-family: raleway;
                            color: black;
                            text-transform: uppercase;
                            text-align: center;
                            }
                            
                        .option-1-name {
                            transform: translate(0, -51rem);
                            }
                        
                        .option-2-name {
                            transform: translate(15rem, -59rem);
                            }
                            
                        .option-3-name {
                            transform: translate(23rem, -59rem);
                            }
                            
                        .option-4-name {
                            transform: translate(16rem, -59rem);
                            }
                        
                        .option-5-name {
                            transform: translate(0, -65rem);
                            }
                            
                        .option-6-name {
                            transform: translate(-15rem, -92rem);
                            }
                            
                         .option-7-name {
                            transform: translate(-23rem, -125rem);
                            }
                        
                        .option-8-name {
                            transform: translate(-15rem, -157.5rem);
                            }
                    
                        .mob-secondary-header {
                            margin-top: 75rem;
                            text-align: center;
                            font-family: "Open Sans";
                            }
                            
                        .mob-secondary-header span {
                            display: block;
                            }
                        
                        .mob-secondary-header p {
                            font-size: 3rem;
                            max-width: 62rem;
                            margin: 0 auto;
                            }
                        
                        .mob-card-img1 {
                            max-width: 35rem;
                            height: 40rem;
                            margin: 8rem auto 4rem auto;
                            }
                            
                        .mob-card-img2 {
                            max-width: 80rem;
                            height: 45rem;
                            margin: 10rem auto 8rem auto;
                            }
                            
                        .mob-card-img3 {
                            max-width: 45rem;
                            height: 38rem;
                            margin: 12rem auto 12rem auto;
                            }

                        .mob-secondary-header-heading {
                            font-size: 6rem;
                            text-transform: uppercase;
                            font-family: montserrat;
                            }
                        
                        .mob-section-coders {
                            margin-top: 10rem;
                            text-align: center;
                            }
                            
                        .mob-section-coders-heading {
                            font-size: 6rem;
                            text-transform: uppercase;
                            font-family: montserrat;
                            }
                        
                        .mob-section-coders-heading span {
                            display: block;
                            }
                            
                        .mob-section-coders-content {
                            margin-top: 8rem;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            }
                        
                        .mob-section-coders-content-coder {
                            height: 65rem;
                            max-width: 35rem;
                            font-size: 2rem;
                            margin: 1rem 4rem;
                            }
                            
                        .mob-section-coders-content-coder-img {
                            height: 15rem;
                            max-width: 15rem;
                            border-radius: 7.5rem;
                            box-shadow: 0 0.7rem 1.7rem rgba(0,0,0,.61);
                            margin: 2rem auto;
                            }
                            
                        .mob-section-coders-content-coder-img amp-img {
                            width: 100%;
                            height: 100%;
                            clip-path: circle();
                            }
                            
                        .coder-name {
                            font-size: 3rem;

                            }
                            
                        .coder-detail {
                            padding: 2.5rem;
                            text-align: justify;
                            }
                            
                        .mob-section-coders-content-coder-details {
                            padding: 2rem;
                            margin: 3rem auto;
                            height: 40rem;
                            border-radius: .5rem;
                            box-shadow: 0 .2rem .4rem rgba(0,0,0,.5);
                            }
                            
                        .mob-section-steps-2-3 {
                            margin-top: 6rem;
                            background: url("/Rectangle2.png");
                            background-size: cover;
                            }
                            
                        .mob-section-steps-2-3-content-heading {
                            font-size: 6rem;
                            font-family: montserrat;
                            text-transform: uppercase;
                            text-align: center;
                            }
                            
                        .mob-section-steps-2-3-content {
                            margin: 10rem 0 16rem 0;
                            background: #D8D8D8;
                            }
                            
                        .mob-section-steps-2-3-content-step {
                            max-width: 100rem;
                            background: white;
                            border-radius: 1rem;
                            box-shadow: 0 0 .4rem .4rem rgba(0,0,0,.1);
                            margin: 0 auto;
                            transform: translateY(-4rem);
                            text-align: justify;
                            padding: 5rem 7rem 12rem 5rem;
                            font-size: 4rem;
                            font-family: "Open Sans";
                            }
       
                        .mob-section-steps-2-3-content-step ol{
                            list-style-position: inside;
                            }
                            
                        .mob-section-coders-apart {
                            text-align: center;
                            background: linear-gradient(to bottom , #8CB6B9 , #627D80);
                            }
                        
                        .mob-section-coders-apart-heading {
                            font-size: 6rem;
                            font-family: montserrat;
                            color: white;
                            padding-top: 8rem;
                            text-transform: uppercase;
                            }
                            
                        .mob-section-coders-apart-features {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            padding: 10rem 0;
                            }
                            
                        .mob-section-coders-apart-card {
                            width: 35rem;
                            margin: 3rem 5rem;
                            padding: 2rem;
                            border-radius: 1rem;
                            background: white;
                            }
                            
                        .mob-section-coders-apart-card-image {
                            max-width: 25rem;
                            height: 30rem;
                            margin: 3rem auto;
                            }
                            
                        .mob-section-coders-apart-card-image amp-img {
                            height: 100%;
                            width: 100%;
                            }
                            
                        .mob-section-coders-apart-card-name {
                            font-size: 4rem;
                            margin: 0 auto;
                            color: #303D41;
                            text-shadow: 0 0.2rem 0.2rem rgba(0,0,0,.5);
                            max-width: 20rem;
                            }
                            
                        .mob-section-take-our-words-content-heading {
                            text-align: center;
           `
                    }} />
                </>
            )
        }
    }
}