import React, { useRef, useEffect } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_piylpri",
        "template_eca068j",
        form.current,
        "tUACHYtswa-kASl0C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="w-full pl-0 sm:pl-64 contact">
      <div className="title flex pt-20 flex-col text-center">
        <h1 className="sm:text-5xl text-2xl font-extrabold" id="contact">
          Get in Touch
        </h1>
        <p className="text-gray-400 mt-3">Feel free to contact me anytime</p>
      </div>
      <div className="contact-me w-full py-16">
        <form onSubmit={sendEmail} ref={form}>
          <div className="w-full px-10 grid gap-5 md:grid-cols-2 grid-cols-1">
            <input
              type="text"
              id=""
              placeholder="Name"
              className="w-full p-2 focus:outline-none focus:border-red-600 border-b-2"
              name="name"
              required
            />
            <input
              type="mail"
              id="email"
              placeholder="Email"
              className="w-full p-2 focus:outline-none focus:border-red-600 border-b-2"
              name="email"
              required
            />
          </div>
          <div className="w-full px-10">
            <input
              type="text"
              id=""
              placeholder="Subject"
              className="w-full p-2 my-5 focus:outline-none focus:border-red-600 border-b-2"
              name="subject"
              required
            />
          </div>
          <div className="w-full px-10">
            <textarea
              id=""
              placeholder="Message"
              className="w-full p-2 pb-10 focus:outline-none focus:border-red-600 border-b-2"
              name="message"
              required
            ></textarea>
          </div>
          <div className="px-10 mt-5">
            <button
              type="submit"
              className="px-5 py-3 bg-red-600 text-white rounded-3xl text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
