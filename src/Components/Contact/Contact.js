import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Loader from '../Loader/Loader';
// import Footer from '../Footer/Footer.js';
function Contact() {

  const [Loading ,setloading]=useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs.sendForm('service_2g56zgy', 'template_drkbtot', form.current, 'O104EhVXxe0kyXdAp')
      .then((result) => {
          window.alert('form submitted');
          setloading(false);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  

    <div class="container-2">
    <div class="form-container">
      <h2>Contact us</h2>
      <form  ref={form} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name"></input>

        <label for="email">Your E-mail</label>
        <input id="email" name="email" type="text" placeholder="Your email"></input>

        
        <label for="message">Your message</label>
        <textarea id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>

        <div class="text-right">
          {Loading ? "" :
          <button type="submit">Submit</button>
  }
        </div>
        {Loading ? <Loader/>:null}

      </form>
    </div>
    {/* { footer } */}
  </div>

  )
}

export default Contact;