import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1z01708', 'template_7v1c0ry', form.current, 'DFOCDgwz_bFaT14kt')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__options-icon'/>
            <h4>Email</h4>
            <h5>saiaryan.goswami1784@gmail.com</h5>
            <a href="https://mailto:saiaryan.goswami1784@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__options-icon'/>
            <h4>Whatsapp</h4>
            <h5>number bhool gaya</h5>
            <a href="https://api.whatsapp.com/send?phone=+918810666903" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OF OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact