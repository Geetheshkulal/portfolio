import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4n4wivg', 'template_l5sf22j', form.current, 'J4pGKe56eyDDBGnCA')
      .then((result) => {
          window.alert('form subbmitted successfully');

          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div class="container-2">
    <div class="form-container">
      <h2>Contact us</h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name"></input>

        <label for="email">Your E-mail</label>
        <input id="email" name="email" type="text" placeholder="Your email"></input>

        
        <label for="message">Your message</label>
        <textarea id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>

        <div class="text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Contact;
