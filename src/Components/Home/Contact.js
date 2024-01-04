import React from "react";

const Contact = () => {
  return (
    <section className="bg-white  m-auto  w-full p-5 ">
      <form action="#" className=" w-full md:w-96">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md outline-none border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2 mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md outline-none shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button type="submit" className="py-3 px-5 pBtn mt-5 rounded-md">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
