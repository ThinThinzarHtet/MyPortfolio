import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";
const Contact = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_MAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_MAIL_JS_TEMPLATE_ID;

  const publicKey = import.meta.env.VITE_MAIL_JS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    const username = form.current.username.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // Simple validation
    if (!username || !email || !message) {
      alert("Please fill in all fields before sending the message!");
      return;
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert("Email already sent!");
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let&apos;s Connect!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">thinthinzarhtet19@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+95 9792 443 905</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/thin.thinzar.htet.138562"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/thin-thinzar-htet-8b4821202/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ThinThinzarHtet"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="username"
              />
            </div>

            <div className="form__input-div">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
              />
            </div>
          </div>

          <div className="form__input-div">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
            />
          </div>
          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
