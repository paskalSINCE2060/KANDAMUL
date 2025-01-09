import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <main>
                <section className="contact">
                    <h1>Contact Us</h1>
                    <p>If you have any questions, suggestions, or need assistance, feel free to reach out to us. We are here to help!</p>

                    <form action="#" method="post" className="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Contact;
