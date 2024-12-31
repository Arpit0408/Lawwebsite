import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://advocategvadmin.advgvdeshmukh.com/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Your message has been sent successfully.");
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatusMessage(result.message);
      }
    } catch (error) {
      setStatusMessage("An error occurred while sending your message.");
    }
  };

  return (
    <section className="text-gray-600 dark:text-white body-font relative bg-gray-100 dark:bg-[#0b1727] pt-10">
       <div className="flex justify-center md:mb-2 ">
				<div className=" text-center justify-center">
				
        <h2 className="text-3xl  font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white pb-0">Contact Us</h2>
      <p className="text-lg pt-4 leading-relaxed text-center max-w-4xl mx-auto">
      We are here to assist you with all your legal needs. 
Whether you have a query regarding Civil & Property Litigation, Corporate 
Law, or require expert advice on real estate, contracts, or intellectual 
property matters, our team of experienced lawyers is ready to provide 
personalized, expert guidance.
      </p>
				</div>
			</div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Shivaji%20Nagar,%20Pune&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white dark:bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md dark:shadow-gray-800">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">
              Office No. 204, 2nd floor, Ashiyana Building, Near District and Session Court, gate no. 4, Nyaymurti Rande Path, Shivaji Nagar, Pune – 411005
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 dark:text-indigo-400 leading-relaxed" href="mailto:adv.ganeshvd@gmail.com">adv.ganeshvd@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">9604455660</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-100 dark:bg-[#0b1727] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 dark:text-gray-100 text-lg mb-1 font-medium title-font">Get in Touch:</h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            If you have any questions or need legal advice, feel free to reach out.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-500 dark:bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded text-lg">
              Send
            </button>
          </form>
          {statusMessage && (
            <p className="mt-4 text-gray-700 dark:text-gray-300">{statusMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
