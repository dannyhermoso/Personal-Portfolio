import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import contactImg from "../assets/img/contact-img.svg"

// npm i @emailjs/browser

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ere3t2p",
        "template_maojyed",
        form.current,
        "CKqM_tM-Y7Y6HkdYN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <ContactContainer>
      <h1>Contact to me with an email!</h1>
            <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
                <label>Yor name</label>
                <input type="text" name="user_name" />
                <label>Your email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <img src={contactImg} alt="contact"/>
            </StyledContactForm>
            </ContactContainer>
    </div>
  );
};


// Styles

const ContactContainer = styled.div`
  min-height: 500px;

  h1 {
    margin-top: 30px;
    margin-left: 20%;
  }
`;

const StyledContactForm = styled.div`
  width: 100%;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
  img {
    width: 400px;
  }
`;