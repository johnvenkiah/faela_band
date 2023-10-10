import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail_jvenkiah',
        'template_7gk3wq3',
        e.target,
        'user_xdb9Fr0JUjCoYFOs4hiu4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(setMessage(true));
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact/Press</h1>
      <div className="mainContainer">
        <div className="textContainer">
          <p className="contactText">
            Do you want to book us? Do you want to ask us a question? Or maybe
            you just want to say hi. Drop us a message below and we'll get back
            to you as soon as we can!
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            className="form-control"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="g-recaptcha"
            data-sitekey="6LcN69AfAAAAAM8mxYEGvjt3EXlXWNmpzSVF6BgG"
          />
          {message && (
            <span>Thanks for writing, we will reply as soon as we can!</span>
          )}
        </form>
        <a
          href="https://drive.google.com/drive/folders/1sMEyZFCjM37uPYaFKDGcNKIQnwNvwZG2"
          rel="noreferrer"
          target="_blank"
        >
          Click here for Faela's Press-PDF and Rider
        </a>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </div>
    </div>
  );
}
