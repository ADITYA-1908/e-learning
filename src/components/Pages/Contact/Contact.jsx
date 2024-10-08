import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    emailSubject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_nc0tdy4', // Replace with your EmailJS service ID
      'template_0p570he', // Replace with your EmailJS template ID
      {
        to_email: 'adisubham1908@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.emailSubject,
        message: formData.message,
        mobile: formData.mobileNumber
      },
      'D92VR1BGClds1s0u0' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        emailSubject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#081b29] text-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact <span className="text-blue-400">Me!</span></h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-blue-400 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-blue-400 rounded"
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border border-blue-400 rounded"
          />
          <input
            type="text"
            name="emailSubject"
            placeholder="Email Subject"
            value={formData.emailSubject}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-blue-400 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-blue-400 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;