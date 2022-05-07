import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
        <div className="mainContainer">
          <div className="textContainer">
          <p className="contactText">
            Do you want to book us? Do you want to ask us a question? Or maybe you just want to say hi.
            Drop us a message below and we'll get back to you as soon as we can!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="7"></textarea>
          <input type="submit" value="Send" />
          {message && <span>Thanks for writing, we will reply as soon as we can!</span>}
        </form>
      </div>
    </div>
  )
}
