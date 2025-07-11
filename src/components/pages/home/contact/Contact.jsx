import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
       {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                    <p>
                      123 Shopping Avenue, Downtown District, Cityville 10001
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3" />
                    <p>info@urbanplaza.com</p>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-3" />
                    <p>Open daily from 9:00 AM to 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-blue-800 hover:bg-gray-200 py-2 px-6 rounded font-medium transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

export default Contact
