import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css';

export default function ContactForm() {
  const [apiMessage, setAPIMessage] = useState(null);


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mngw4ul', 'template_pcyegpe', e.target, 'user_3PmAOUTZFfmWAV0Ppb9cj')
      .then((result) => {
        setAPIMessage('Your request have been sent!')
      }, (error) => {
        setAPIMessage(error.text)
        console.log(error.text);
      });
  }

  return (
    <div>

      {apiMessage && <div className="api-notification">{apiMessage}</div>}
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" className="user-name" required />
        <label>Email</label>
        <input type="email" name="user_email" className="user-email" required />
        <label>Message</label>
        <textarea name="message" className="user-message" />
        <input type="submit" value="Contact Us" className="user-submit" />
      </form>
    </div>
  );
}