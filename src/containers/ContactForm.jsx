import React from "react";

export default function ContactForm() {
  return (
    <>
      <hr></hr>
      <h1 className="heading">Kontaktirajte nas</h1>
      <div className="form-container" id="contact">
        <form className="form">
          <input
            placeholder="Vaše ime"
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
          />
          <input
            placeholder="Vaše prezime"
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="Vaš email"
            tabIndex="3"
          />
          <textarea
            placeholder="Vaša poruka..."
            className="message"
            name="message"
            rows="6"
          />

          <button type="submit" className="send">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
