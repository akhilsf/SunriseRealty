import React from 'react';
import { ContactUsContainer } from './footerStyle';

const ContactUs = () => (
  <ContactUsContainer>
    <label htmlFor="name" style={{ color: 'white' }}>Your Name: </label>
    <br />
    <input type="text" id="name" name="name" placeholder="John Doe" required />
    <br />
    <label htmlFor="email" style={{ color: 'white' }}>Your Email: </label>
    <br />
    <input type="text" id="email" name="email" placeholder="john.doe@johndoe.com" required />
    <br />
  </ContactUsContainer>
);

export default ContactUs;
