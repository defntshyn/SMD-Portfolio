import React from 'react'
import './ContactStyle.css'

const ContactForm = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "26b78325-b4a2-40d4-8120-08f41fc046ed");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact-container">
            <div className="banner">
                <h2>Contact</h2>
                <h5>Let's get in touch!</h5>
                <p>Feel free to reach out if you’d like to collaborate, have a question, or just want to say hi.
                    You can also connect with me through my socials below:</p>
                <div className="list-socials">
                    <a href=""><i className="fa-brands fa-facebook"></i><span>Facebook</span></a>
                    <a href=""><i className="fa-brands fa-google"></i><span>Gmail</span></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i><span>LinkedIn</span></a>
                    <a href=""><i class="fa-brands fa-github"></i><span>Github</span></a>
                </div>
            </div>
            <form onSubmit={onSubmit} action="">
                <h3>Form</h3>
                <input type="hidden" name="subject" value="Email from Portfolio"></input>
                <div className="input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="input">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' required/>
                </div>
                <div className="input">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="5" required></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm