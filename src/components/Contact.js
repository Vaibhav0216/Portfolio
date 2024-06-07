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
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
