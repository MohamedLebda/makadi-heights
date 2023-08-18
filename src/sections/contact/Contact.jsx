import "./contact.css";
import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import contactImg from "../../assets/contact-img.png"
// import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      agree: false,
      message: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      setMessage(`name: ${values.name}\nemail: ${values.email}\nphone: ${values.phoneNumber}\nbudget: ${values.budget}\nmessage: ${values.message}`);
      setTimeout(() => {
          formik.resetForm();
          setLoading(false);
          setMessage(null);
        }, 5000);

  // for sending an actual email message 

      // emailjs.sendForm('service_rr3ydga', 'template_jvfu9p9', formRef.current, 'gPIVo2E3WmYCt2Lj9')
          // .then((result) => {
          //     formik.resetForm();
          //     setMessage("Message sent successfully!");
          // }, (error) => {
          //     setMessage("Error sending message.");
          // })
          // .finally(() => {
          //   setLoading(false);
          //   setTimeout(() => {
          //     setMessage(null);
          //   }, 10000);
          // });  
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().required("Required"),
      budget: Yup.string().required("Required"),
      agree: Yup.boolean().oneOf([true], "You must agree to the processing of personal data"),
      message: Yup.string().required("Required"),
    }),
  });

  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="contact__left">
          <img src={contactImg} alt="contact img" />
     
          <div className="contact__info">
          <p className="first">Ready for a Home</p>
          <p className="last">Makadi Heights</p>
          </div>
        </div>
        
        {message && <div className={`message ${message.includes("Error") ? "afterMessage error" : "afterMessage success"}`}>{message}</div>}
        <div className="contact__right">
          <h4>Enter your details and our representative will get back to you shortly</h4>
        <form ref={formRef} onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            disabled={loading}
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name?  <div className="error__msg">{formik.errors.name}</div>:<div className="error__msg"></div> }

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email ID"
            disabled={loading}
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email?  <div className="error__msg">{formik.errors.email}</div>:<div className="error__msg"></div> }

          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            disabled={loading}
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="error__msg">{formik.errors.phoneNumber}</div>
          ) : <div className="error__msg"></div>}

        
          <select
            id="budget"
            name="budget"
            disabled={loading}
            {...formik.getFieldProps("budget")}
          >
            <option value="">Choose your bugdet</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {formik.touched.budget && formik.errors.budget ? (
            <div className="error__msg">{formik.errors.budget}</div>
          ) :<div className="error__msg"></div>}

       
      
          <textarea
            id="message"
            name="message"
            placeholder="Enter you message"
            disabled={loading}
            {...formik.getFieldProps("message")}
          />
          {formik.errors.message?  <div className="error__msg">{formik.errors.message}</div>:<div className="error__msg"></div> }

        <div className="check__box">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              disabled={loading}
              checked={formik.values.agree}
              {...formik.getFieldProps("agree")}
            />

            <label htmlFor="agree" className="checkbox__label"> I agree to the processing of personal data </label>
        </div>
               {formik.touched.agree && formik.errors.agree ? (
            <div className="error__msg">{formik.errors.agree}</div>
          ) : <div className="error__msg"></div>}

            <button type="submit" id="submitBtn" className="btn submit-btn"  disabled={loading} >
            {loading ? 'Sending...' : 'leave a Call request'}
          </button>
        </form>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
