import React from "react";

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log(userName, email, message);
  };

  return (
    <section className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 text-white py-6 px-4">
      <div className="w-11/12 mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-lime-500">
          <span className="text-gray-700">Contact</span> Us
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Feel free to send us a message!
        </p>

        <form className="space-y-4 text-gray-700" onSubmit={handleFormSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="userName"
              className="w-full p-3 border rounded-xl shadow-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-xl shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 border rounded-xl shadow-sm"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
