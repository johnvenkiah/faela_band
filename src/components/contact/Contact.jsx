import "./contact.scss"

export default function Contact() {
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
        <form action="">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
          <label htmlFor="title">Email Address</label>
          <input type="email" id="email" />
          <label htmlFor="title">Message</label>
          <textarea name="message" id="message" cols="30" rows="7"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}
