

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './contact.css'; 
import qrCodeImage from './whatsapp.png'; 
const Contact = () => {
  const formRef = useRef(null); 
  const navigate = useNavigate(); 
  const [thankYouVisible, setThankYouVisible] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
    };

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);


      formRef.current.reset();

     
      setThankYouVisible(true);

      
      setTimeout(() => {
        navigate('/'); 
      }, 3000); 
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="contact-content">
        <div className="qr-code">
          <h2>Contact Me on Whatsapp</h2>
          <img src={qrCodeImage} alt="WhatsApp QR Code" />
          <p>Scan the QR code to message me on WhatsApp!</p>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" required />
          </label>
          <button type="submit">Send message</button>
       
        {thankYouVisible && (
          <div className="thank-you-message"  >
            <p style={{color:"green"}} className='ty'>Thank you for contacting me! I will get back to you soon.</p>
          </div>
        )}
        </form>
      </div>
          <div className='footer'>Made with love <i class="fas fa-heart" style={{color:'red'}}></i>
          </div>
    </section>
  );
};

export default Contact;
