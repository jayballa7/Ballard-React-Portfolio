import React from 'react';
import '../styles/Contact.scss';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


function Contact() {

    return(
        <div className="contact-wrapper">
            <Header />
            <div className="contact-content">

<div className = "contact-background">

<div className="contact-card-container">
	<div className="front side">
		<div className="contact-card-content">
			<h1>Contact Me</h1>
		</div>
	</div>
	<div className="back side">
		<div className="contact-card-content">
			<h1>Contact Information</h1>
            <p>Phone Number: 425-443-2792</p>
            <p>Email: jenn_ballard7@hotmail.com</p>
            <p>Located in Renton, Washington</p>
		</div>
	</div>

</div>


</div>
{/* 
                <div className = "contact-card">
                    <h2>Contact Information</h2>
                        <div className="separator"></div> 
                    <h3>Jennifer Ballard</h3>
                    <p>Phone Number: 425-443-2792</p>
                    <p>Email: jenn_ballard7@hotmail.com</p>
                    <p>Located in Renton, Washington</p>
                </div> */}

            </div>

            <div className = "contact-footer">
                    <Footer />
                </div>  

        </div>
    )
}
export default Contact;