
import React, { useEffect } from 'react';
import './Contact.css';

const Contact = ({ isDarkMode }) => {
    useEffect(() => {
        const h2Element = document.querySelector('#contact h2');
        if (isDarkMode) {
            h2Element.style.color = 'white';
        } else {
            h2Element.style.color = 'black';
        }
    }, [isDarkMode]);

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-form">
                <div className="contact-info">
                    <h3>Location</h3>
                    <p>Janwadi, Gokhalenagar, Pune, Maharashtra 411016</p>
                    <h3>Phone</h3>
                    <p>+91 7498236616</p>
                    <h3>Email</h3>
                    <p>maulikshirsagarvk18@gmail.com</p>
                    <h3>Map</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.969212129287!2d73.8222953751919!3d18.530293382565215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMxJzQ5LjEiTiA3M8KwNDknMjkuNSJF!5e0!3m2!1sen!2sin!4v1717828677205!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Subject:
                        <input type="text" name="subject" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
