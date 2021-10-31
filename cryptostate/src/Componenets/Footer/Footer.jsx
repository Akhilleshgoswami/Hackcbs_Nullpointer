import React from 'react'
import "./Footer.css"

function Footer() {
    return (
       <div className="main"> 
       <footer className ="footer-distributed">

        <div className ="footer-left">

    <h3>Cryptostate<span></span></h3>

    <p className="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Blog</a>
        ·
        <a href="#">Pricing</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
    </p>

    <p className="footer-company-name">Cryptostate &copy; 2021</p>
    </div>

    <div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>India</span> State</p>
    </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+91 555 000000000</p>
        </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">cryptostate@gmail.com
    </a></p>
    </div>

    </div>

    <div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
        Cryptostate is a blog for web designers, web develpor  &amp; SEO Learner.
    </p>

    <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

    </div>

    </div>

    </footer>
                
    </div>
        )
    }

    export default Footer
