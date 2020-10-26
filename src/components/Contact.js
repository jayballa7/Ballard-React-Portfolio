import React from 'react';
import '../styles/Contact.scss';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import SpaceKitty from "../img/space-kitty-2.jpg";


function Contact() {

    return(
        <div className="contact-wrapper">
            <Header />
            <div className="contact-content">

            <div className="picture-block">
            <img src={SpaceKitty} className = "space-kitty"></img>
            </div>

            <div className="contact-div">
                <h1>Contact Me</h1>
                <hr className="contact-separator"></hr>
                    <h4>Phone Number: 425-443-2792</h4>
                    <h4>Email: jenn_ballard7@hotmail.com</h4>
                    <h4>Located in Renton, Washington</h4>
            </div>
            


{/* <div className = "contact-background">

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
</div> */}


            </div>

            <div className = "contact-footer">
                    <Footer />
            </div>  

        </div>
    )
}
export default Contact;